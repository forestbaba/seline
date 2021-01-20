import React from 'react'

const SocialButton:React.FC<{height:number, width:number, svgname:}> = ({height, number}) => {
    return (
        <TouchableOpacity style={styles.icon_button}>
               <svgname height={height} width={number} fill="blue"  />
            </TouchableOpacity>
    )
}
export default SocialButton;