import React from 'react'
import PackageCard from '../PackageCard/PackageCard';

export default function Card() {

    const packageData=[

        {
            name:'SilverPackage',
            price:'$200',
            headingNote:'This is discripton',
            packageDetailes:[
                'First month free',
                'Limited access',
                'Maximum 3 reviewa',
            ],
            buttonLabel:"Try free"

        },
        {
            name:'GoldPackage',
            price:'$300',
            headingNote:'This is discripton',
            packageDetailes:[
                'First month free',
                '5 months access',
                'Maximum 5 review'
            ],
            buttonLabel:"Bye now"

        },
        {
            name:'PlatinumPackage',
            price:'$400',
            headingNote:'This is discripton',
            packageDetailes:[
                'First month free',
                'Unimited access',
                'Unlimited reviews'
            ],
            buttonLabel:"Customize"

        }
    ]
  return (
    <div className='w-full h-screen flex justify-center items-center '>
        
            {
                packageData.map((dataItem,index)=>(
                    <PackageCard dataItem={dataItem} />
                ))
            }
          
        </div>

  )
}
