import React from 'react';
import { Tabs, Paper} from '@material-ui/core'
import Tab from '@material-ui/core/Tab';


class Footer extends React.Component {
    render() {
        return (
            <Paper>
            <Tabs
              value={0}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Paper>
        )
    }
}

export default Footer;