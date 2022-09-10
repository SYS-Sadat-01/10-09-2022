// const setOfItems = new Set(('tv', 'pc', 'remote'))

// // setOfItems.forEach(function(val){
// //     console.log(val)
// // }
// // )


// setOfItems.forEach((pa)=>{
//     console.log(pa)
// })

// setOfItems.add('TV')
// setOfItems.add('Car')
// setOfItems.forEach((pa)=>{

//     console.log(pa)
// })


// const ourClass = new Set(['Ayesha_Jan', 'Yousuf_', 'Kado khan_'])

// ourClass.add('Sharif_')
// ourClass.add('Israil')
// ourClass.forEach((pa)=>{
//     document.write(pa)
// })


// ourClass.delete('Kado khan_')
// for(const x of ourClass.values()){
//     console.log(x)
// }




// const itemAndPrice = new Map([
//     ["TV", 500],
//     ["PC", 400],
//     ["Pen",10],


// ]);
// var theName = 'Name'

// console.log(itemAndPrice.get('TV'))


// itemAndPrice.set('Car', 'Chevrolet')
// console.log(itemAndPrice.get('Car'))
// itemAndPrice.set(1,89)
// itemAndPrice.set(theName, 'Yousuf')

// itemAndPrice.forEach((key, val)=>{
//     console.log(val +":"+ key)
// })
// itemAndPrice.set('Bicycle','Japanesse')

// for(const x of itemAndPrice .entries()){
//     console.log(x)
// }
// itemAndPrice.set('Glass', 'Afg')
// console.log(itemAndPrice.has('Glass'))




// function myFunc(){
//     const theMessage = document.getElementById('sms');
    
//     let x = document.getElementById('input').Value;


//     try{
//         if(x == ' ') throw "This cell is empty";
//         if(isNaN(x)) throw "Only Number Allowed";
//         x = Number(x)
//         if(x < 5) throw "It Is Less Than The Valid Number"
//         if(x < 15) throw "It Is Greater Than The Valid Number"

//     }
//     catch (error){
//         theMessage.innerHTML = error
//     }
//     finally{
//         document.getElementById('input').Value = ' ';
//     }

// }



// let x = 1;
// var y = 5;
// const theMessage = document.getElementById('sms')
// try{
//     x = y + 9;
//     console.log(x)
// }catch(error){
// theMessage.innerHTML=error.name
// }

// var k = 1;
// try{
//     console.log(k.toUpperCase(k))
// }catch (error){
//     theMessage.innerHTML=error.name
// }


// function myFunc(){

//     const theMessage = document.getElementById('sms');
//     theMessage.innerHTML = '  ';
//     let x = document.getElementById('input').Value;

//     try{
//         if(x == '  ') throw "Empty Cell Not Allowed"
//         if(isNaN(x)) throw "Only Number Allowed"
//         x = Number(x)
//         if(x < 5) throw "This is less than our Range"
//         if(x > 15) throw "This is more than our Range"
//     }catch(error){
//         theMessage.innerHTML = error
//     }
      
    

// }


