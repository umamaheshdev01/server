import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ymjsanlykbfwjrxbvzej.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltanNhbmx5a2Jmd2pyeGJ2emVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwNDU4NzcsImV4cCI6MjA0MDYyMTg3N30.wjk5gH-BJpazZeABuiXxUY8C2WIbRgh8C3soTIq7I0M'
const supabase = createClient(supabaseUrl, supabaseKey)

import { NextResponse } from "next/server"



export const POST = async(req,res)=>{

   
    
    
    const data1 = await req.json()


    const myemail = data1.data.email_addresses[0].email_address
    const namam = data1.data.username
    const img = data1.data.image_url

    const {data,error} = await supabase.from('Users').insert({email : myemail,username : namam,pic:img})

    if(error)
    {
        return NextResponse.json({error},{status:500})
    }
    else
    {
        return NextResponse.json({msg:myemail},{status:200})
    }

}