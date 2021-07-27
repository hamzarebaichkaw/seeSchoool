import React from 'react';
import Header from "../professeurs/HeaderProfs/Header";
import Sidebar from "../professeurs/SideBarProfesserus/Sidebar";
import structure from "../professeurs/SideBarProfesserus/SidebarStructure";
import ProfsDashboard from "./dashboardProf/DashboardProf"
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import classnames from 'classnames'

import { useLayoutState } from '../../context/LayoutContext'

import useStyles from './styles'


function Layout(props) {

    const classes = useStyles()
    // eslint-disable-next-line no-unused-vars
    const [value, setValue] = React.useState(2)
    const [anchorEl, setAnchorEl] = React.useState(null)

    const open = Boolean(anchorEl)
    const id = open ? 'add-section-popover' : undefined
    const handleClick = event => {
        setAnchorEl(open ? null : event.currentTarget)
    }

    // global
    const layoutState = useLayoutState();

    // eslint-disable-next-line no-unused-vars
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    // eslint-disable-next-line no-unused-vars
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        }
    }


return(

    <div className={classes.root}>
    <Header/>
    <Sidebar structure={structure} />
    <div
                className={classnames(classes.content, {
                    [classes.contentShift]: layoutState.isSidebarOpened,
                })}
            >
                <div className={classes.fakeToolbar} />
            
                <Switch>
               
                    <Route path="/Professeur/dashboard" component={ProfsDashboard} />
                    <Route path="/Professeur/emploi" component={ProfsDashboard} />
                    <Route path="/Professeur/cours" component={ProfsDashboard} />
                    <Route path="/Professeur/notifications" component={ProfsDashboard} />
                    <Route path="/Professeur/notes" component={ProfsDashboard} />
                    <Route path="/Professeur/Events" component={ProfsDashboard} />
                    <Route path="/Professeur/assuidité" component={ProfsDashboard} />
                    <Route path="/Professeur/homework" component={ProfsDashboard} />
                    <Route path="/Professeur/support" component={ProfsDashboard} />
                </Switch>
             
                {/* <Footer>
                   
                </Footer> */}
            </div>
        </div>
)



}

export default withRouter(Layout)