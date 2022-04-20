import {mount} from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Fibonacci', () => {

    const build = () => {
        const wrapper = mount(Home, {});

        return {
            wrapper,
            numberToCalculateFibonacci: () => wrapper.find('[data-test-id="number-to-calculate-fibonacci"]'),
            calculateButton: () => wrapper.find('[data-test-id="calculate-button"]'),
            result: () => wrapper.find('[data-test-id="result"]'),
        };
    };


    it('renders fibonacci result for user input when user click calculateButton', async () => {
        const number = 8;
        const expectedResult = '21';
        const {numberToCalculateFibonacci, calculateButton, result} = build();

        await numberToCalculateFibonacci().setValue(number);
        await calculateButton().trigger('click');

        //expect(result().text()).toMatch(expectedResult);
        expect(result().text()).toEqual(expectedResult);
    });
});