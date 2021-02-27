import React from 'react'
import Paper from './../../components/paper/paper'
import Sidebar from './../../components/sidebar/sidebar'
import Navbar from './../../components/navbar/navbar'
import MenuButton from '../../components/menuButton/menuButton'





export default function SearchPage() {
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
      }
    return (
        
        <>
        <Navbar children={<MenuButton onClick={handleDrawerToggle}/>}/>
        <Paper children={<Sidebar mobileOpen={mobileOpen} close={handleDrawerToggle}/>}></Paper>
        </>
    )
}