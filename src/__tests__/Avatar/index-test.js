/**
 * Created by frank on 6/23/16.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Avatar from 'Avatar';

describe('<Avatar />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Avatar>
        <div className="unique" />
      </Avatar>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });
});
