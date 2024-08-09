import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import { useCartContext } from '../../../context/CartContext';
import CartItem from './../../carts/CartItem';
import coffees from '../../../data/coffee.json';
import glasses from '../../../data/coffee.json';
import products from '../../../data/coffee.json';

type Props = {
    isOpenCart: boolean
}

const SideBarCart = ({ isOpenCart }: Props) => {

    const { closeCart, cartItems } = useCartContext()

    return (
        <Offcanvas isOpen={isOpenCart} onClosed={closeCart} fade scrollable direction='end'>
            <OffcanvasHeader toggle={closeCart}>
                Offcanvas
            </OffcanvasHeader>
            <OffcanvasBody>
                <div className='d-flex flex-column gap-4 align-items-center'>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>

                <div>
                    total price: {' '}
                    {cartItems.reduce((total, currentItem) => {
                        const product = products.find((item) => item.id === currentItem.id) || coffees.find((item) => item.id === currentItem.id) || glasses.find((item) => item.id === currentItem.id)

                        return total + (product?.price || 0) * currentItem.quantity
                    }, 0)}
                </div>
            </OffcanvasBody>

        </Offcanvas>

    );
};

export default SideBarCart;

import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function DrawerAnchor() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
          <ListItem key={text}>
            <ListItemButton>{text}</ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text) => (
          <ListItem key={text}>
            <ListItemButton>{text}</ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <ButtonGroup variant="outlined">
        {(['top', 'right', 'bottom', 'left'] as const).map((anchor) => (
          <Button key={anchor} onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </Button>
        ))}
      </ButtonGroup>
      {(['top', 'right', 'bottom', 'left'] as const).map((anchor) => (
        <Drawer
          key={anchor}
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      ))}
    </React.Fragment>
  );
}
