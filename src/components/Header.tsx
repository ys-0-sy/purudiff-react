import * as React from 'react'
import { Tabs, Tab, AppBar } from '@material-ui/core'

type Props = {
    handleChange: (event: React.ChangeEvent<{}>, value: number) => void,
    value: number
}

export const Header: React.FC<Props> = props => (
    <AppBar position="static">
        <Tabs
            value={props.value}
            variant="fullWidth"
            onChange={props.handleChange}
            className={"TabStyle"}
        >
            <Tab data-test="PuruButton" label="Purudiff" />
            <Tab data-test="DiffButton" label="Diff" />
        </Tabs>
    </AppBar>
);