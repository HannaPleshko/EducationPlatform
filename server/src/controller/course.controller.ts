import express, { Request, Response } from "express";
import {getCourse, getCourseById, createCourse,updateCourse,deleteCourse } from '../service/course.service';
const route = express.Router()


route.get('/', async function (req:Request, res:Response) {
    try {
        const course = await getCourse()
        res.status(200).send(course)
    } catch (error:any) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', async function (req:Request, res:Response) {
    try {
        const { id } = req.params
        const course = await getCourseById(id)
        res.status(200).send(course)
    } catch (error:any) {
        res.status(404).send(error.message)
    }
})

route.post('/', async function (req:Request, res:Response) {
    try {
        const { title } = req.body
        const course = await createCourse(title)
        res.status(200).send(course)
    } catch (error:any) {
        res.status(404).send(error.message)
    }
})

route.put('/:id', async function (req:Request, res:Response) {
    try {
        const { id } = req.params
        const { title } = req.body
        const course = await updateCourse(id,title)
        res.status(200).send(course)
    } catch (error:any) {
        res.status(404).send(error.message)
    }
})

route.delete('/:id', async function (req:Request, res:Response) {
    try {
        const { id } = req.params
        const course = await deleteCourse(id)
        res.status(200).send(course)
    } catch (error:any) {
        res.status(404).send(error.message)
    }
})
  


export default route