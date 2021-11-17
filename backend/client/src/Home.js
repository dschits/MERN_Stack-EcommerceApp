import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'> 
            <div className='h-banner-div'> 
              <img className='home-banner1' src='https://staticimg.titan.co.in/production/promotions/fastrack/reflextunes/Headphone_Banner3.jpg' />
              <img className='home-banner11' src='https://mir-s3-cdn-cf.behance.net/projects/404/fa51ef86518111.Y3JvcCw5NDYsNzQwLDEwMywzMzc.jpg' />
            </div>
           <div className='products-list'>

                <Product id='1'
                title='SONY MDR-XB650BT SWQ EXTRA BASS™ Wireless Headphones Matt Blue'
                cost={3999}
                rating={5}
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HMk60PTXn1HXcebUATBI9bjzRgW2Wp4sGjni1bZGoRqiXFOtO1SiE1myw_j1cqDp9MM&usqp=CAU' />
                
                <Product id='2'
                title='SONY WI-XB400 EXTRA BASS™ Wireless In-ear Headphones'
                cost={2899}
                rating={3}
                img='https://www.vplak.com/250-images/sony/EX150AP/darkblue/image-1.jpg' />
                
                <Product id='3'
                title='SONY ZX110 Wireless Extra Bass Headphones '
                cost={2459}
                rating={4}
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZOjVB7-VEgNtXt0onZyXIYHfMtlP_pYjMctkPwnRMsy_c5oxe4LQAcBPF5yylBz5lqA&usqp=CAU' />

                <Product id='4'
                title='SONY WH-XB700 Bluetooth Wireless Headphones'
                cost={9950}
                rating={3}
                img='https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_260,w_260/v1605266385/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/8945103405086.png' />

                <Product id='5'
                title='SONY WF-SP800N Truly Wireless Noise-Cancelling Headphones for Sports'
                cost={7699}
                rating={4}
                img='https://audioxpress.com/assets/upload/images/1/20200402123145_Sony-WH-CH710N-WF-XB700-FrontWeb.jpg' />
                
                <Product id='6'
                title='SONY WH-H910N h.ear on 3 Wireless Noise Cancelling Headphones'
                cost={6999}
                rating={5}
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSU75vPM698lcq3oOt35bVqPa2sZjft_fnqripKMf_Nhwfh8IwsvBiIH9Exz8VZ-Lvm4U&usqp=CAU' />
                
                <Product id='7'
                title='SONY WF-H800 h.ear in 3 Truly Wireless Headphones'
                cost={4999}
                rating={4}
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKNfNYoJvK-5mh9NLJ-4Qar2WJkNnzyiGjUg&usqp=CAU' />


                <Product id='8'
                title='SONY WH-CH510 Smooth Wireless Headphones'
                cost={1900}
                rating={2}
                img='https://5.imimg.com/data5/NV/VH/AD/SELLER-96583041/sony-wireless-headphones-500x500.jpg' />

                
                <img className='home-banner2' src='https://blog.westenddj.co.uk/wp-content/uploads/2018/10/hdj-x5bt-hub-banner-2560x768.jpg' />
                <img className='home-banner22' src='https://staticimg.titan.co.in/production/promotions/fastrack/reflextunes/Headphone_Banner3.jpg' />
                
          
                <Product id='9'
                title='Zebronics Zeb-Thunder Wireless BT Headphone Comes with 40mm Drivers, AUX , Built in FM, Call Function'
                cost={999}
                rating={5}
                img='https://images-na.ssl-images-amazon.com/images/I/81cJ1kUT1LL._SL1500_.jpg' />

                <Product id='10'
                title='Zebronics Thunder Headphone 40mm Drivers, AUX'
                cost={1500}
                rating={3}
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEi_WpF8WeMJwT6emI9m5gLGUn5cJeAv34Q&usqp=CAU' />

                <Product id='11'
                title='Zebronics Zeb-Bang  Wireless BT Headphone Call Function, 16Hrs* Playback time & Supports Voice asist'
                cost={1999}
                rating={4}
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSfzdJlyscu8qE0jq8C_ao-q9UCz5D1srP-JmuPFrUKtSLZv5uVy1ZYq68uBL8FXHAuA&usqp=CAU' />

                 
                <img className='home-banner3' src='https://www.getinthemix.com/c/images/16/0245486001524562491.jpg' />
                <img className='home-banner33' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05tyY5DYOfVsLOQ-BSPNtpEmQ01ULW1CyHw&usqp=CAU'/>


                <Product id='12'
                title='Pioneer DJ Americas REFERENCE DJ HEADPHONES (white)'
                cost={4359}
                rating={5}
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxiqGSiBoDP_wXSaofcqdPQtUFIkEhyYHvw&usqp=CAU' />

                
                <Product id='13'
                title='Pioneer DJ HDJ-X5 Over-Ear DJ Headphones '
                cost={3499}
                rating={3}
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbt3CE1sJl4oqkpSJhfiZ00vqFL5kjr0Xgw&usqp=CAU' />
    
               <Product id='14'
                title='Sennheiser HD 25 DJ Headphones'
                cost={7089}
                rating={4}
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1mdptHmyCmd6sn3csiTeWZ-3hP47hQELWIw&usqp=CAU' />
                
                
                <img className='home-banner4' src='https://m.media-amazon.com/images/S/aplus-media/vc/188f44d4-90b7-4bc1-8914-efc991fc00ca.__CR0,0,970,300_PT0_SX970_V1___.jpg'/>
                <img className='home-banner44' src='https://cdn.shopify.com/s/files/1/1780/7915/files/HP_X1000_Headset_-_From_TPSTECH.in-Hero_Banner_03.jpg?v=1606149955' />

                <Product id='15'
                title='HP Wired Gaming with 3.5mm Jack And USB Wired Gaming Headset  (Black, On the Ear)'
                cost={6500}
                rating={4}
                img='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgUFRQYGRgaGhocGBkYGhoZHRocHBoaHiQaHh4cIS4lHh4rIRkYJjgmKy80NTU1GiQ7QDszPy40NTEBDAwMEA8QHhESHz8rISs3QDc0NDY0MT00PzE1P0A/NT4xODQ9ND0/Pzo/NDcxPz8/NDE7QDExMUA/NTFAMTExMf/AABEIANUA7AMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUBAgj/xABCEAACAQICBwQIAwcDAwUAAAABAgADEQQhBQYSMUFRYQcicYETMkJSkaGxwRRicjOCksLR4fAjQ7I0otIVFlOUw//EABcBAQEBAQAAAAAAAAAAAAAAAAAEAQP/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAQIR/9oADAMBAAIRAxEAPwC5oiICIiAiIgIiICIiAiJ8M4AJJsBvJytA+58lrb5AdZe0uhQJp4cemfdcG1NT+rex8MusjlLRWltKd6s5pUTmA90Uj8tNc28W+MCf6U10wVC4fEKzD2affP8A25DzkZxfaxRBtSw9Rzw2mVL+QuZvaI7MMHSsau1WYe8dlP4V+5Ml2C0VQoi1KjTQfkRV+YECvU1+x9T9lo0kfpqN89kTOmtGmTn/AOmi3VXH1aWTECvBrlpFP2mintxKFv8AxM2KHaXhwdmvQr0T+Zbj7H5SdzDWoqwsyqw5MAR84GhovWDDYj9jXRz7oNm/hOc6sjGkdSMDVz9CKbbw1L/TIPOy5fKalPA6Qwf7Kr+LpD/bqHZqgflfc3nAmUTkaG07SxF1F0qL69JxsuniOI6jKdaB7ERAREQPLRPYgIiICIiAiIgIiICInM05pilhaLVqpsq7gN7NwVRxJge6Z0xRwtM1az7KjdxLHko4mVPjdLY7TVQ0cOpp0Ae8LlVA51HHrH8gvv3cZ84LBYnTmJNWqSmHQ2y3IPcS+9zxb+wNu6L0bSw9NaVFAiLuA49Sd5J5mBH9VtQ8Ng7OVFWsP9xhkp/Iu5fHf1kunhNpB9Zu0bD4YmnRHp6oy7psin8zcfBb+UCbswAuTkJGtL684HD3DVg7D2KQ2z4XHdHmZT2mdZMbjCfSVG2PcS6oPEDI/vEzDhKlOkAfw9N296qzut/0JZfiTAnuI7UKtRtjCYNnPAttOf4UB+s+Vr6wYjNU9Ep6U0/5Et8pFF15xaDYp1qdJeC0qVJQPkYTX/Hg/wDV3/UlMj/jAl6aqaafN8eF8KtQ/wDFAJkGpOlBu0m38dX+s4uj+1LFIR6anTqrzW9NvLeD8JPdXtd8LiyEVzTqH/bqd0n9J3N5G/SBwE1f03TzTHI/R2Y/8qZmddI6boftMNTrqOKFQfk1/wDtlgxArfEaz4asyrjKFbCV19SrskFT0YC9uhBElWhdLFtmnUdWJv6OqltisBnlb1XA3p4kXF7dbFYVKilaiK6neGAYfORHSeoqi74Oq1ByQdm5NMkG4NsypBtYjdAms9kb0Hp4sww2JX0eJUZrls1MvXQjI3GdvHkZJICIiAiIgIiICIiAiIgIiIGKrVVVLMQFAJJOQAG8mUxjq9bTeOFOmWXDpextkqXsahHF24A/1km7XNOmnQXCoe9WuWtv9GDu/eOXkZ39RdXhgsKqsB6V7PVP5j7Pgoy+MDs6L0dTw9JaNJQqILAcfEniTvJnuk9IUsPTarWcKijMn6DmTynmltJU8PSatVbZVfiTwUDiTylHa06eqY1/SVjsU1J9HSB9Ue8ebc28h1Dd1q13xGNJp0dqlh+V7O43XdvZH5R53kSapTTL1jy/z7/CYcRii2S5Dhb7f13zWCwMtXGu247I6f5l5WmAgnMknxN59Wn0qwCIJlVBPaFFmNlUseSgk/ATr4XVvGN6uFrH9xx9RA5yYcHp4Q+GdcxmOBG8Tu/+18cmZwtW3RCfpPn0Dodl0ZDydSp+BECTaj9oTIVw+MYshySsfWTkH5r+beOMttXBAINwcwRnPzlpHR1gXQfqH3k87LdazcYGseH+gx6Z+jJ45Zr4EcoFqxPBPYER160epVMUVJ9Cw29nJvRsQCykZhkJDg9DOtofFsQKVRgz7IZHGQqodzi2QYXAYc7HcROhi6C1EamwuHUqfBgRIbquz1MGUU/6+EqOi34lCbIfyspKH+0CdRNPR2NWtTWqvquLjmOYPUG48puQEREBERAREQEREBPDPZr4yvsI7ncqs38IJ+0CqaKfj9Osxzp0DfpalkB5uby2qjgAkmwAJJO4AcTKs7HEGzi8W5AuyqzHICwLsb8u+Jxtd9b3xjlKLMuHpnepINRt1zbhwA6mB9a86zfiandP+il/Rr7x3Gow68OniZBsTiC56THiajbVmNwcx48us+IHon0BPrD0GdgiKWZiAqgXJJ4Ac5b2pnZwlPZrYwB33rS3qn6vebpuHWBBNXNSsVjLOq7FM+291U/p4t5fGWPobswwtKzV2as3I9xfgDc+Zk9VQBYZCfUDTwWjqNEWpUkQflUD6TciICa2LwdOqpWoiup4MAZsxAr/AE5qXsAvh7svtUzmbflPHjkc+sqfH02w1YbBKlSHpt0BuPMEWn6XtK37VNWQ9BsTTXvUztuBxX2j9z4QJhqtplcZhqeIFgWFnHuuMmX4zsyluyTT3oqzYVz3KuadHA/mGXiBLoEBILqfU2dIaQpjdthh43N/+UnRMrfs8qelx2OrD1SSAehqNb5LAkerj+jxGLwvBXFVB+SqLkDoH2vjJNIbUqbGmlUf7mEsf3XYj6SZQEREBERAREQEREBK+1711p0hVwSqz1HRkZr7Kptoc+ZIBvb5ywZ+btaMXt4vEVLg3epbPkdkfKBs6K07QGjquC9JUSsau2oRQRX2tlQl+FrbiR5zjtWA7qjJSRa43g2NyJyMPiAjh7XZblej2Nj5Gx8pm0FhqlWqtGnYs5soY7IJsbC54m3nA+8QpOZ57uXhMmjsO9V1porO7GyqouSZldGG0pGyc1YEZg7iPHKW32XantQH4yqCtR02aaZjZRrG7DmbDLhA6uoupSYJRVqANiGGZ3hAfZXrzbj4SaxEBERAREQEREBMNekrqyMLqwKkcwRYzNPIH5lx+HODr1Kdyr0qjKpHuq3dI5EAA9Z+gdVNMDFYanW9ojZccnXI+R3joRKS7UaGxj6/5irfxU1P1k17IdIHv0TudFdf1L3T8tn+GBNdcNKfhsJVqXs2zsp+pu6Phe/lOD2T6PKYRqp31ahI/SvdHzDGcTX7GvjMXSwFE3CuAxG7bYZnwVb/ADlkYelTw9BVFlSkm/kqDM/K8CHem29PWGfo6BU+Ozf/APQSfytOzbaxGLxeNYZMdlf3jtW8lCDzllwEREBERAREQEREDHVawJ5An5T8vYt77Zvn3zxyu3UZfKfp/Feo/wClvoZ+XMSPX/T/ADQOWVJ6Tp6IRzVprTClvSJsZe3tCxbnnaDg2K3I2fHLgOHKdPUytTo42jUrNamjbTGxNrA2yGfrWgXji9TMJUxCYlqYDJvVQAjkbiy8bG8komDC4lKih0ZXUjJlNwZsQEREBERAREQEREBERAo3tjwNUY6kyhQlZFVWbdtoSCCdwyKTgaq6wPhQKgADoGVQdzK4y3e6T8hJ92zaYorTp4fZDVdrbB/+MWZb+LXPkL8pVGEwG1Seo7MATsoBmXcncL8ALkmBcPZXoYlWx1Q7TuWVCTc2v3nPJma48B1m12oac2KQwiZ1K1toDeEvu8WOVuV5CtSNYMRgm2HXbpn10BAFwMnUnIMcrjjJFqRoypjcU+kMSLhW7gO4uMgB+VBYePnAmmp2hvwmFSkQNs96pb32zI8sh5TvREBERAREQEREBPLwZX+tushLmjTayrkxHtNyvyECRaf1lw+HRtttprEBVzJJG6+4Sh6S3JcLYG4W/EA+t8Zt6f0gXJF/VS/mxI+Nh85rNTZUUE5hR45DlwgauOq5b5o0pkxRnmHIALHcIEi1a1rr4Fro20hsXQ+q3/ieo+cvDV/T1HGUxUpN+pT6ynkR9+M/M71gTO3qnrG+DrLUU3Xc68HXiD15HgYH6Viamj8YlamlVDdXUMp6H7jdNuAiJHtNa34PDXFSqCw9hO+3mB6vnaBIZ5Ki0p2tOTs4egq8mqEsf4VIHzkfftQ0i256a52stNfL1iYF/RKFwnaxj1PfFFxyZCpy3i6sPpJnq52rYWuQmIBw7m1mY7VMn9fs/vDzgWPOZpzS1PC0XrVCAFBsCbbTWNlB5m1ptVsUiI1RmARQWLE5AAXveUBrvrXUx1YqjMKIOyiZ2bPJmXixPmNwgc7SWLfHYh69Vt5YgnZBpoveAYC1wFuAeJAm3SUOwYKVSmClFTkQONRh7zHnwmGnSv3BYIhs42ttSwJIp3JvsLtMOpE2qjbOfC2Y6Df8PpA3EF7Dnul5aMwq0qSU1AAVQMudsz5m5lI4PDtUdUQbTMQFA6/brLv0bSZKSK7bTKqhm5kDfA24iICIiAiIgIiIHI1k0h6Cgz37x7q+JBP0BlH4rHbRJvck3lldqWIKpRQHJjUJHOygfzGU/Ve28wMWJqbRcn30B45ZH7zp1VJUn1V5nef6zjO1w7DPOmfgf7TsKU3uxZuXAdP7QOLihNXFPan4sPuZ0cem+wtOViwSgzyDZ+NsvvA1EebFOpNQZT6QwLn7H9Ys2wTtkQWp35j1l8xc+RlqY3FpSRqlRgiKLszGwE/Lmg8e9GslVPWRgwt0P+Dzkv1l1jr45rnuop7lMHIdT7zdYHa1q1/qYgmjhiadM5Ftzv5+yOgz+kgW5yj5bXtHgTzmYopBVrq43dZgxdWwAc3IGQ4+cDWawuOIYFW8N46gzxaDMSQLX55DfefFKpnebyVBA0sRg2AuCCfhn/fnznNp1BtWe4F88sxO7V0jTGRN/DMeE5WI9G2dyOu/Lrzgd/D6ZxD0F0fTrM9Lbuq8RlfZ2vcG+24WPlhoYYbYWk1yBm43Dm6+O5el25Th0mZAzJVsGXZcLcbSk5qRxGQnb0JpVckKZsfXU3ux94HMQOzTpKihQLACwmBlZmCKCzkgKvvNa6j94Bl8ZtMeI3SZdm+iadSq9d82pgKqEArmbh8/aBVreMCRaj6r/haYdztVCLC4tsIdy/qtYE9JL54J7AREQEREBERAREQK87WV7mHb87r8UB/llMVQSTfmZfXabh9rAs3Gm6N89n+aVhq1q8mJDu7kKrbOyu85A7+ECNYSltFk99GA8QLibOj8QqgFUu3EkXseQkz1n0GlPDCrSQBqLq9+JS4DXPHI38pEXPoqrkC4NnS5FgrD63vA90kt94tcTgVFurDln8P7Xkjeo7rtMLDhla84OJGy/T7QOS4hRMtanskjl9Jn0VQ2nF90Dp6Lwotmcz/lp0XohQCrnaPqgC9zyOeXjCUlVXubbNiLbzeYquI2FJ9siwy9VefiYHmNxJU551NxO8L08ZxqpOZ3mfe3nnDpcGB84Ogz9BxJ+3ObtV0pjfc/P+wmlh2qNZEJvwA/zIdZLNEas0kX0uIYOd4BzTyBzc9Tl0MCK4fR1Wtd1Syk+ucl8AfaPhMWLwzIQpU5i4uCL+AIvaT7FaRvkg2RuByvb7eE5jre5OZ5nMwIctAWvbf1t9Zs6P0czMSmeW48fA7jJJTWa2PwppD09Pu2I21G4gn1rcxA2cC73ZHvewZb77biD1Bt8ZY/Zbfbr8thPq0hKbLotYCzC6NbrY/DKWH2YYcinWcj1mVR1Cgn+aBO4iICIiAiIgIiICIiBz9NYEV6FSifbRl8DbI+RtKa0FpFcBXenW2thxcEC5DLluy6g+Al6yo+0fQQFRmAyfvIeTHePj9YHN0xrqjo9JKXcdWUs5zswschlxkUZtqmj5FqR2STn3DmD5XBnHqEgkEWINiOs29H17HZO5hst4HcfiSPMQOvSd3F3sF6/Yb5x9JJfPlN3DO6k0wouPaJG47t/wAPKMcndzIJ423QI9WG0u1xXf4c/KdfReG2VR7e0b/Cclrq2XHL4yWUkCp0Gy/ky2P+dYGGoNlmY95FORG4ngM+U5VaoWJZjck3m3jX3LwGdt+bZ/TKY8CiNURaj7CFhtsASQvGwGd+HnAkeo+qQxJNeuD6IGyLe22w3n9IOXUg+eLXfC4ai/o6KkMBdyWuBcZAA8ePwk8TWPAIi0qeIRQF7oswAVRe2YyyHGVTjGOLr1GW4QsTnvseJv7R5cN3CB7q/bvELccyMifzc7cE3cTyndq1S2bEk9Zgo01RQqiwG4T0mB40+RPZ9BYHlGnPdMrbDVSfc+pE2sPTmlrI4IpYe9vSOC9+Crz8T9IEu7LsAtRnWqgZVp02AYXG1uvbwvLXSmFACgADcALD5SF9m+B2UqVvfYKvIhd5+Jt5ScQEREBERAREQETUxdNrXQ5zjprFsNsV1K/mAPzH3ECRxMOHrq6hkYMp3EG4maAnF1m0UMRQZQO+veXx4jzH2nanhgfnvSmhgzl9k7W5gMsxleY00KLEEBQRY8TYyytdtChCcQtgpI2xuAY5X8Cfn4yEVntvygRTEB1ve+3TycbtteDeBGfjNmk4qICCqry7xP0H1m3pKlt2ZPXXIX3Mp3oenI8JxhUZCdg2RjmGv3G43tu/wwNPSa2a6g5Z/CSRmDKtjvAt1U528iCJy69IMudj4f1mzo+m7IFCOSt9kqPZ/wA+kDdx2DVxdCCw5EZ9DI7WYqbcRNxabK6kGzdyxGe0HbZIPhvnex2hUcXuMvIjzG+BEUou+YBNzYST4TDimgUeZ5niZ8YaiFAAGQGX9Zs2ygfInoWeXmzgKgDqxFwD038N+W+bmdsjNXktbVLDIguw2390Hug8iRvPQTLjMIihWUglib7NgLdBMtSmoO0WQA+wneI6Dh9vGeJT2je1hwH9zO+7nObInxNa1L1iQKil3NlUXYngBIXhnq43GqtNbtUYIgPsLzPgASfOb+ntLLVPo0N6KHvWNvSuPYB9wbyf7SzuyzU78On4ustq1Re6pFvRo2e7gzZeAAHOTqU50TgFw9FKC+rTUKDxNhmx6k3PnN6eT2AiIgIiICIiAmpjsBTrLsuoYfMeB4TbiBX2kNB4vBsa2DdnTe1PebdV3N4jOdDV3XmjXIp1rUqu6zGyseQJ3HoZMJFNbdUcPilLm1KpwqCwB/UOI+cCVgz2VToDTeNwTGjX2a9BTYOrqSq81JOYHIyTYzXQW/0aLEcHqH0a+V8z5QJXVpqylWAKkEEEXBB4EcpWutmp4pA1KNVVTeadVgNn9DEg26ZzofiNIYnczqp4U02F/jfP4TLhtS2Y7VVlB4lr1W+LWX5QKrZMS7FKVMZe16/mLcJs4LVmqzEu92beqjbJ6bKg2+UubD6q0FHe2n6MbL/CthOxh8MiCyKqj8oAgU6NVDh1BXBV6hO6yFvMqp7vmfKdrAapYuuh29jDIdyEbTkdVUgL5kmWdaewKV0tqcaDbTMSVIOQ7rKrXFuk0sS/cYcZbGtuJw6YdjiGUBgQguAzPskhUvvY2MqDCVfTKQRZ1AuDxB3MPhbocoGjSfNgOBA+QP3mbZM1MU/oam0wOw4AYj2SOPw3zp4dkcAq6sOhBgayU5t0aEzsyILu6KObMB9Zo1dYaYOzRRqz8AoIX42z8hA6opqilmIVRmSTYAdSd0j+ltI1MQrJh1K0wO+5uC3Qcl6bz4b+lgND4jFOvpySTmtGmN3VjuHib+Us3V/U9KWy1VVJXNEHqp1PvN1gQzs01AYlMXi1IUWNGiwsTxDuDuHEL5mXFPLT2AiIgIiICIiAiIgJydIaeo0W9GzXe19gb7c+U60iusehqr4ijWoqhZW75bgtrHjytA9qaYxFT9mgQe8cz8TkJz6tAMb1arO3ujvf2E71PQxbOpUJ/KuQnSw+DRPVUDrx+MCPYTRDMMkVFO8tm5B5cpEdZ9HY7R9YYygwq0VNyrKDsjiHyuR+fhLYmNkBBBFwciDmDA4GqutVDHJtUzs1FHfpse8p5j3l5EfKSKVjrP2dMtT8Vo9zTqA7RRTs2PEof5TlPrROvmJon0WNoM5Xe9JbVB+qi1ifFSYFmxI/o7XHA18kxNMNxRz6Nx0KvY3naTEKRcMpHMEGBmmvi8SlNGqVGCooJZibAAcZhxelqFIXqVqaD8zKPvK0171pTGIuHwu3UUNdyBZKhsQKYvm2ZvutkIEb1x1jOJxIrIztTRV2KTALsFgO8RmDdgQelt1pKtR9RW/6iu5Cul0RSQw2t4YMNwOY8RPrs71NIBr4mmNmwFNHUh12WBDHlbMdZaAECv8ATGoRcHYYMOAPdI6g7ryFY/s1xXsUlY8/UJ8bGxl7RA/P9Hsu0g5/Z00HN6g+gBMmGr3ZUKTh6+ILH3KQ2RbkWbMjwAlnz2BpaP0dSorsUkCjjbeepO8nxm7EQEREBERAREQEREBERAREQEREBERATR0joyjWFqtJXHDaAJHgd4iIEb0h2fYepkGYD3WC1V8hUBI+M4j9mlIHJ6X/ANdfs4iIGfDdmNDe1QW4hKSU7+JFyZLNEatYbDW9FTG177d5vjw8rREDsiexEBERAREQEREBERAREQEREBERAREQP//Z' />
                
                <Product id='16'
                title='HP White Bluetooth Headset 454-DDA'
                cost={4700}
                rating={3}
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidp8vGySgFtRQffpkrHjsvw0fSlL-5M_er_gXoZhhrlLbBkTAK56FL8L4XWWe-n3lmA8&usqp=CAU'/>
          
                <Product id='17'
                title='HP Wired Ultra-Gaming   (Green, On the Ear)'
                cost={3199}
                rating={5}
                img='data:image/jpeg;base64,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' />

            
        </div>
        <div className='extra-margin-btm'>

        </div>
    </div>
    )
}

export default Home