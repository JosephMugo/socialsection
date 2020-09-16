//                 TESTIMONIES
//                      ----> TESTIMONY COMPONENT
//     Colton Smith 
//     Verified Buyer
//     "We needed the same printed design as the one we had ordered a week prior.
//     Not only did they find the original order, but we also received it in time.
//     Excellent!"
    
//     Irene Roberts 
//     Verified Buyer
//     "Customer service is always excellent and very quick turn around. Completely
//     delighted with the simplicity of the purchase and the speed of delivery."
    
//     Anne Wallace 
//     Verified Buyer
//     "Put an order with this company and can only praise them for the very high
//     standard. Will definitely use them again and recommend them to everyone!"
import React from 'react';
import coltonImg from '../../../images/image-colton.jpg';
import ireneImg from '../../../images/image-irene.jpg';
import anneImg from '../../../images/image-anne.jpg';
import Testimony from '../Testimony/Testimony';
import './TestimonyList.css';

const Colton = {
    image: coltonImg,
    name: 'Colton Smith',
    type: 'Verified Buyer',
    description: 'We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time.Excellent!'
}

const Irene = {
    image: ireneImg,
    name: 'Irene Roberts',
    type: 'Verified Buyer',
    description: 'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.'
}

const Anne = {
    image: anneImg,
    name: 'Anne Wallace',
    type: 'Verified Buyer',
    description: 'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!'
}
const TestimonyList = () => {
    return (
        <div className="testimonyListContainer">
            <Testimony key='1' user={Colton} />
            <Testimony key='2' user={Irene} />
            <Testimony key='3' user={Anne} />
        </div>
    )
}

export default TestimonyList;