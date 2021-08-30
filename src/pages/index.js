import React, { useState } from 'react'
import { Footer } from '../components/Footer'
import { HomeSection } from '../components/HomeSection'
import { SmallHouse } from '../components/SmallHouse'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { ContactSection } from '../components/ContactSection'
import { WhatsappButton } from '../components/Whatsapp'
import { BigHouse } from '../components/BigHouse'
import { UbicationSection } from '../components/UbicationSection'

export const OnePage = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <>
            <Sidebar open={ open } toggle={ toggle }/>
            <Navbar toggle={ toggle }/>
            <HomeSection/>
            <SmallHouse/>
            <BigHouse/>
            <UbicationSection/>
            <ContactSection/>
            <WhatsappButton/>
            <Footer/>    
        </>
    )
}
