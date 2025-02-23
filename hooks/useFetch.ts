import { useState,useEffect } from "react";
import axios from 'axios';
import JobDetails from '@/type/jobType';


const rapidApiKey = process.env.RAPID_API_KEY
interface queryModel {
    query:string,
    page?: string,
    num_pages: string,
    date_posted?: string
}
const useFetch = (endpoint:string,query:any) => {
    const [data,setData] = useState<JobDetails[]>([])
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query
        },
        headers: {
          'x-rapidapi-key': "4720219523msh82d46b1027264a9p1da08ajsnf4060e5fb7a4",
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };
      
    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setIsError(true)

            alert("there is an error")
        } finally{
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchData()
    },[])

    const refetch = () =>{
        setIsLoading(true)
        fetchData()
    }

    return {data,isLoading,isError,refetch}
}

const useFetchById = (endpoint:string,query:any) => {
    const [data,setData] = useState<JobDetails>()
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query
        },
        headers: {
          'x-rapidapi-key': "4720219523msh82d46b1027264a9p1da08ajsnf4060e5fb7a4",
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };
      
    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setIsError(true)

            alert("there is an error")
        } finally{
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchData()
    },[])

    const refetch = () =>{
        setIsLoading(true)
        fetchData()
    }

    return {data,isLoading,isError,refetch}
}


export default {useFetch,useFetchById}