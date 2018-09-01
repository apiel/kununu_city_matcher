import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import reducer, {
    getCities,
    CITIES_FAILED,
    CITIES_SUCCESS,
    CITIES_REQUEST,
    initialState,
} from '../cities';
import { api } from '../../config';

jest.mock('axios');

const mockStore = configureStore([ thunk ]);

describe('modules cities', () => {
    describe('actions', () => {
        let store;
        beforeEach(() => {
            store = mockStore({});
        });

        describe('getCities()', () => {
            it('should dispatch success if fetch data without error', async () => {
                const data = 'hello';
                axios.get = jest.fn().mockReturnValue({ data });

                await store.dispatch(getCities());
                const actions = store.getActions();

                expect(actions).toEqual([
                    { type: CITIES_REQUEST },
                    { type: CITIES_SUCCESS, data },
                ]);

                expect(axios.get).toHaveBeenCalledTimes(1);
                expect(axios.get).toHaveBeenCalledWith(api.cities);
            });
            it('should dispatch failed if fetch data with error', async () => {
                axios.get = jest.fn(() => { throw 'terrible error'; });

                await store.dispatch(getCities());
                const actions = store.getActions();

                expect(actions).toEqual([
                    { type: CITIES_REQUEST },
                    { type: CITIES_FAILED, error: 'unknown error' },
                ]);
            });
            it('should dispatch failed with error message if fetch data with known error', async () => {
                const error = 'terrible error';
                axios.get = jest.fn(() => { throw new Error(error); });

                await store.dispatch(getCities());
                const actions = store.getActions();

                expect(actions).toEqual([
                    { type: CITIES_REQUEST },
                    { type: CITIES_FAILED, error },
                ]);
            });
        });
    });
    describe('reducer', () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState);
        });
        it('should handle CITIES_REQUEST', () => {
            expect(reducer(initialState, {
                type: CITIES_REQUEST,
            })).toEqual({
                ...initialState,
                fetching: true,
                error: null,
              });
        });
        it('should handle CITIES_FAILED', () => {
            const error = 'terrible error';
            expect(reducer(initialState, {
                type: CITIES_FAILED,
                error,
            })).toEqual({
                ...initialState,
                fetching: false,
                error,
            });
        });
        it('should handle CITIES_SUCCESS', () => {
            const data = 'hello';
            expect(reducer(initialState, {
                type: CITIES_SUCCESS,
                data,
            })).toEqual({
                ...initialState,
                fetching: false,
                data,
            });
        });
    });
});
