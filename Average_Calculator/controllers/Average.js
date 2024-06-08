const express=require("express");
const axios=require("axios");
require("dotenv").config();
const average=async(req,res)=>{
    const {id} = req.params;
    let window=[];
    if (id != 'p' && id != 'e' && id != 'r' && id != 'f') return res.status(404).json({ msg: "Please give a vaild id!" })
    try {
        if (id == 'p') typeofnumbers = 'primes'
        else if (id == 'f') typeofnumbers = 'fibo'
        else if (id == 'e') typeofnumbers = 'even'
        else typeofnumbers = 'rand'
        const response = await axios.get(`${process.env.URL}/test/${typeofnumbers}`, {
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN}`
            }
        })
        var windowPrevState =[...window]
        var { numbers } = response.data;
        let uni = numbers.reduce(function (acc, curr) {
            if (!acc.includes(curr))
                acc.push(curr);
            return acc;
        }, []);

        uni.forEach(num => {
            if (!window.includes(num)) {
                if (window.length >= 10) {
                    window.shift();       
                }
                window.push(num);
            }
        });
        var windowCurrState = [...window];

        res.status(200).json({
            numbers: uni,
            windowPrevState,
            windowCurrState,
            avg: 5, 
        });
    }
    catch (err) {
        console.log(err);
    }
     
}
module.exports=average;