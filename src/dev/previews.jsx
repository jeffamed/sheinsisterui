import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import {SideBarComponent} from "../components/SideBarComponent";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/SideBarComponent">
                <SideBarComponent/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews