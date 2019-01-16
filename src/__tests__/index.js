import {createElement, Component} from 'rax';
import renderer from 'rax-test-renderer';
import Chart from '../';

describe('Chart', () => {
  it('test typeof Chart', () => {
    expect(typeof Chart).toEqual('function');
  });
});
