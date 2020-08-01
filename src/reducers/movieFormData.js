export default (state = {
    title: '', 
    image: '', 
    description:'', 
    category: '', 
    year:''
}, action) => {

  switch(action.type) {
     case 'UPDATED_DATA':
        return action.movieFormData
     
     default:
        return state; 
    }
}