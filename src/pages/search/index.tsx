import React from 'react'
import Paper from './../../components/paper/paper'
import Sidebar from './../../components/sidebar/sidebar'

export default function SearchPage() {
    return (
        <Paper children={<Sidebar/>}></Paper>
    )
}
