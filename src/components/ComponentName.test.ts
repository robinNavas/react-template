import React from 'react';
import renderer from 'react-test-renderer';
import Component from './CompoName.tsx';

describe("Filter function", () => {
  const component = renderer.create(
    <Component />
  )
  test("it should filter by a search term (link)", () => {

    expect(Component).toBe(output);

  });
});
