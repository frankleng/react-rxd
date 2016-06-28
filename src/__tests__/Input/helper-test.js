/**
 * Created by frank on 6/22/16.
 */
import { expect } from 'chai';

import * as helper from 'Input/helper';

const validProps = {
  disabled: true,
  validationState: 'success'
};

describe('Input helpers', () => {
  it('should produce classname based on props', () => {
    const classname = helper.getInputClassnameFromProps(validProps);
    expect(classname).to.include(helper.styles.success);
  });
});
