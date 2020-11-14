import React from 'react'
import './Homepage.css'
import Product from './Product'
import ad from './images/ad2.jpg'
import Sellpage from "./Sellpage";

function Homepage() {
    return (
        <div className='Homepage'>
            <div className='Homepage_container mt-5'>
                <h2 className='container font-weight-normal'>Fresh  recommendations</h2>

                <Sellpage />
                <div className='container d-flex justify-content-between flex-wrap mt-3'>
                

                <Product 
                id = "1"
                img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkxKcm3f5-NxxO_uotsVkuD0jQLOiQJsHuOg&usqp=CAU"
                price = {80000}
                date =  "Oct 15"
                location =  "karachi,pakistan"
                discription = "gaming pc" />

                <Product 
                id = "2"
                img ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS7eEn_rPuFK0tyWTEMViqZonQyYPF1VZY6A&usqp=CAU"
                price = {250000}
                date =  "Oct 10"
                location =  "karachi,pakistan"
                discription = "Iphone12" />    

                <Product 
                id = "3"
                img = "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwd633af54/images/700000/704909.jpg"
                price = {12000}
                date =  "Oct 1"
                location =  "karachi,pakistan"
                discription = "Sofa Set" />  

                <Product 
                id = "4"
                img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlpvivvWOy0tmUhaZQ2CwAGlI-suH2T65rhg&usqp=CAU"
                price = {6000}
                date =  "Oct 6"
                location =  "Lahore,pakistan"
                discription = "Printer for sale" />  
                </div>

                <div className='container d-flex justify-content-between flex-wrap mt-2'>
                <Product 
                id = "5"
                img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9OcLKlbw5ERpq-GuHeqOlCIdsN033Hl7sOA&usqp=CAU"
                price = {1800000}
                date =  "Today"
                location =  "karachi,pakistan"
                discription = "Honda civic 2015 model" />

                <Product 
                id = "6"
                img ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9dmUha2ILbQpxbJZ-watfpGNgp_jOCKAbgw&usqp=CAU"
                price = {1200}
                date =  "Oct 20"
                location =  "karachi,pakistan"
                discription = "Cotton Bed Sheets" />    

                <Product 
                id = "7"
                img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1M5YaLsYhJsdK7WeaP2ReW-flmPwbQQfSfQ&usqp=CAU"
                price = {190000}
                date =  "Today"
                location =  "karachi,pakistan"
                discription = "Honda 150CC" />  

                <Product 
                id = "8"
                img = "https://cdn1.vectorstock.com/i/1000x1000/82/20/mens-jackets-collection-vector-16128220.jpg"
                price = {6000}
                date =  "Today"
                location =  "Lahore,pakistan"
                discription = "Leather jacket" />  
                </div>
            
                <div className='container d-flex justify-content-between flex-wrap mt-2'>
                <Product 
                id = "9"
                img = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&w=1000&q=80"
                price = {450000000}
                date =  "Sep 15"
                location =  "Islamabad,pakistan"
                discription = "banglow" />

                <Product 
                id = "10"
                img ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRxc_xf9bfcvigRDFA05OTBy40AEsT-7HCxA&usqp=CAU"
                price = {3000}
                date =  "Oct 19"
                location =  "karachi,pakistan"
                discription = "Womens 3 piece suit" />    

                <Product 
                id = "11"
                img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR62m2F1mLk-uvbZoi3KS-sOtUvDx5c6gDQoQ&usqp=CAU"
                price = {2500}
                date =  "Sep 3"
                location =  "karachi,pakistan"
                discription = "T-500 watch" />  

                <Product 
                id = "12"
                img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWoOzOhgDARk0SqRE68731Bz2GPlWr8gcXag&usqp=CAU"
                price = {12000}
                date =  "Today"
                location =  "Mirpur,Azad kashmir"
                discription = "Air Conditionar" />  
                </div>
            
                <div className='container d-flex justify-content-between flex-wrap mt-2'>
                <Product 
                id = "13"
                img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStQKg6lLezLxuVTOFnJKw7dVxdPFW7PrfV2w&usqp=CAU"
                price = {190000000}
                date =  "Sep 15"
                location =  "Mirpur,Azad kashmir"
                discription = "Russian Army Helicopter" />
                </div>
            </div>


            <div className='d-flex justify-content-center align-items-center'>
                <button className='loadMoreBtn font-weight-bold'>Load More</button>
            </div>
            <div className='text-center mt-3 mb-5'>
                <img src={ad} alt=""/>
            </div>

        </div>
    )
}

export default Homepage
