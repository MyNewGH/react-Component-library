import React from "react";
import {cleanup, fireEvent, render, RenderResult, screen} from '@testing-library/react';
import Menu,{MenuProps} from "./menu";
import MenuItem from "./menuItem";

const testProps:{ defaultIndex: number; className: string; onSelect: jest.Mock<any, any> } = {
  defaultIndex:0,
  onSelect:jest.fn(),
  className:'test'
}

const testVerProps:MenuProps={
  defaultIndex:0,
  mode:'vertical',
}
const generateMenu = (props: MenuProps)=>{
  return <Menu {...props}>
    <MenuItem index={0}>
      JNJNJ
    </MenuItem>
    <MenuItem index={1} disabled>
      sf
    </MenuItem>
    <MenuItem index={2}>
      sdfs
    </MenuItem>
  </Menu>
}
let  menuElement:HTMLUListElement,activeElement:HTMLLIElement,disabledElement:HTMLLIElement;
describe('test Menu and MenuItem component',()=>{
  beforeEach(()=>{
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(generateMenu(testProps))
    menuElement = screen.getByTestId('test-menu');
    activeElement = screen.getByText('active')
    disabledElement = screen.getByText('active')
  })
  it('should render correct Menu and MenuItem based on default props', function () {
      expect(menuElement).toBeInTheDocument();
      expect(menuElement).toHaveClass('viking-menu test');
    // eslint-disable-next-line testing-library/no-node-access
      expect(menuElement.getElementsByTagName('li').length).toEqual(3);
      expect(activeElement).toHaveClass('menu-item is-active');
      expect(disabledElement).toHaveClass('menu-item is-disabled')
  });
  it('click items should change active and call the right callback', function () {
      const thirdItem = screen.getByText('sdfs');
      fireEvent.click(thirdItem);
      expect(thirdItem).toHaveClass('is-active');
      expect(activeElement).not.toHaveClass('is-active');
      expect(testProps.onSelect).toHaveBeenCalledWith('2')
      fireEvent.click(disabledElement);
      expect(disabledElement).not.toHaveClass('is-active');
      expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
  });
  it('should render vertical mode when mode is set to vertical', function () {
      cleanup()
      render(generateMenu(testVerProps));
      const menuElement = screen.getByTestId('test-menu');
      expect(menuElement).toHaveClass('menu-vertical')

  });
})
