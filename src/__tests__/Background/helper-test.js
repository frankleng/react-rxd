/**
 * Created by frank on 6/22/16.
 */
import { expect } from 'chai';
import * as helper from 'Background/helper';

const validProps = {
  fullScreen: true
};

describe('Background helpers', () => {
  it('should produce classname based on props', () => {
    const classname = helper.getBackgroundClassnameFromProps(validProps);
    expect(classname).to.include(helper.styles.fullScreen);
  });
});
