import { url } from "./utilsApi"

const request = (token, setEntries) =>{
   fetch(url+'api/tech/getAllSolutions', {
     'method': 'GET',
     'headers': {
       'accept': '*/*',
       'Authorization': token,
       'Content-Type': 'application/json' 
     }
   })
   .then(response => response.json())
   .then(result=> Array.isArray(result.entries) && setEntries(result.entries))
   .catch(error=>console.log('Error :', error))
 }



 const getByCategory = (token, category, setEntries) =>{
  fetch(url+'api/score/getNotScoredTechSolutionsByCategory/'+category, {
    'method': 'GET',
    'headers': {
      'accept': '*/*',
      'Authorization': token,
      'Content-Type': 'application/json' 
    }
  })
  .then(response => response.json())
  .then(result=> Array.isArray(result.entries) && setEntries(result.entries))
  .catch(error=>console.log('Error :', error))
}

const getByScores = (token, setEntries) =>{
  fetch(url+'api/score/getScores', {
    'method': 'GET',
    'headers': {
      'accept': '*/*',
      'Authorization': token,
      'Content-Type': 'application/json' 
    }
  })
  .then(response => response.json())
  .then(result=> Array.isArray(result) && setEntries(result))
  .catch(error=>console.log('Error :', error))
}

const createSolution = (body, token) =>{
  fetch(url+'api/tech/createSolution', {
    'method': 'POST',
    'body': JSON.stringify(body),
     'headers': {
      'accept': '*/*',
      'Authorization': token,
      'Content-Type': 'application/json' 
      }

  })
    .then(response => response.json())
    .then(result => console.log(result))
    
}

 const deletes = (token, id, handleUpdate) => {
    fetch(url+'api/tech/delete/'+id, {
      'method': 'DELETE',
       'headers': {
        'accept': '*/*',
        'Authorization': token,
        'Content-Type': 'application/json' 
        }
  
    })
      // .then(response => response.json())
      .then(()=>handleUpdate())
      .then(result => console.log(result))
      
      // .then(result => setAnswer(result))
      .catch(err => console.log(err))
  }

const ILoginRequest = (login, password ) => {
   return  fetch(url+'api/auth/login', {
      'method': 'POST',
      'body': JSON.stringify({
         "login": login,
         "password": password
       }),
       'headers': {
        'accept': '*/*',
        'Content-Type': 'application/json' 
        }
  
    })
      .then(res=> {
         if (res.ok) return res.json();
         else throw new Error;
       })
      // .then(result => console.log(result))
      // .then(result => setAnswer(result))
      // .catch(err => console.log(err))
   }

   const getAllSolutions =(token)=> {
    fetch(url+'api/tech/getAllSolutions', {
      'method': 'GET',
      'headers': {
        'accept': '*/*',
        'Authorization': token,
        'Content-Type': 'application/json' 
      }
    })
    .then(response => response.json())
   }

   const updateEffectiveness = (token)=>{
    fetch(url+'api/tech/updateEffectivenessOnClick', {
      'method': 'POST',
      'headers': {
        'accept': '*/*',
        'Authorization': token,
        'Content-Type': 'application/json' 
      }
    })
    .catch(error=>console.log('Error :', error))
   }

  

 export {ILoginRequest,
         request,
         getByCategory,
         getByScores,
         updateEffectiveness,
         deletes, 
         createSolution, 
         getAllSolutions,
 };


 
