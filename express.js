const express=require('express');
const Joi = require('joi');
const cors = require('cors');
let app = express();
app.use(cors());
app.options('*', cors());

// import bodyParser from 'body-parser'
// app.use(bodyParser.json());    use the json data
app.use(express.json());
let courses=[
    {id:1,name:"course1", age:12, empId:10, branch:"EnTC", role:"Angular Developer"},
    {id:2,name:"course2", age:12, empId:10, branch:"EnTC", role:"Angular Developer"}    
]

app.get('/',(req,res)=>{
    res.send('Helllo express data');
});
// app.get('/api/customer',(req,res)=>{
//     res.send([1,2,3]);
// });

// // pass id in api
// app.get('/api/customer/:id',(req,res)=>{
//     res.send(req.params.id);
// });
 

// // query param
// app.get('/api/posts/:year/:month',(req,res)=>{
//     res.send(req.query);
// });

// 1. to get all data 
app.get('/api/getAllCourses',(req,res)=>{
    res.send(courses);
});

//2.  to get single data using id
app.get('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id))
    console.log(course);
    if(!course) res.status(404).send("Course Id is not found");
    res.send(course);
    
});


//3.  to insert data using post method 

app.post('/api/insertCourses',(req,res)=>{
  
    const result=validateCourse(req.body)
    console.log(result)
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return
    }
    const course={
        id:courses.length + 1,
        name:req.body.name,
        age:req.body.age,
        empId: req.body.empId,
        branch: req.body.branch,
        role: req.body.role
    }
    courses.push(course)
    res.send(course);

});


//4. To update record using put method

app.put('/api/updateCourses/:id',(req,res)=>{
     result=validateCourse(req.body)
    console.log(result)
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return
    }
    const course=courses.find(c=>c.id===parseInt(req.params.id))
    console.log(course);
    if(!course) res.status(404).send("Course Id is not found");
    course.name=req.body.name;
    course.age=req.body.age;
    course.empId=req.body.empId;
    course.branch=req.body.branch;
    course.role=req.body.role;
    res.send(course)

}); 

//5. To delete record using delete method
app.delete('/api/deleteCourses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id))
    console.log(course);
    if(!course) res.status(404).send("Course Id is not found");
    let index=courses.indexOf(course);
    console.log('index',index)
    courses.splice(index,1)
    res.send(course);
})


const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening  on port ${port}...`)
})

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string()
            .min(3)  
            .required(),
        age: Joi.number(),
        empId:Joi.number(),
        branch:Joi.string(),
        role:Joi.string()

    })
    return schema.validate(course)
}


let labels = [
    {   "id":1,
        "mainHeader":"home",
        "subHeader":[
             {"id": 11, "subheaderName": "About us" },
             {"id": 12, "subheaderName": "Future work" },
             {"id": 13, "subheaderName": "offers" }
         ]
    },
    {
     "id":2,
     "mainHeader": "Services",
        "subHeader":[
         {"id": 14, "subheaderName": "Construction Consultant" },
         {"id": 15, "subheaderName": "Resconstruction Service" },
         {"id": 16, "subheaderName": "Architectural Design" },
         {"id": 17, "subheaderName": "Design and Construction" },
         {"id": 18, "subheaderName": "Green building" },
         {"id": 19, "subheaderName": "House Renovation" }
        ]
    },
    {
     "id":2,
     "mainHeader": "Portfolio",
     "subHeader":[
         {"id": 20, "subheaderName": "Commercial" },
         {"id": 21, "subheaderName": "Education" },
         {"id": 22, "subheaderName": "Industrial" },
         {"id": 23, "subheaderName": "Residential" }
     ]
     } 
 ];


 // 1. to get all label 
app.get('/api/getAllLabels',(req,res)=>{
    res.send(labels);
});




