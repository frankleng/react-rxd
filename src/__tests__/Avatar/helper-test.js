/**
 * Created by frank on 6/22/16.
 */
import { expect } from 'chai';
import * as helper from 'Avatar/helper';

const validProps = {
  size: 'medium',
  square: true,
  className: 'this_is_a_test'
};

describe('Avatar helpers', () => {
  it('should produce classname based on props', () => {
    const classname = helper.getAvatarClassnameFromProps(validProps);
    expect(classname).to.include(helper.styles.medium);
    expect(classname).to.include(helper.styles.square);
    expect(classname).to.include(validProps.className);
  });
});
