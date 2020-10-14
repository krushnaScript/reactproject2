import React, { useState } from 'react';

const Home=()=>{
    const imageArray=[
        {imageUrl: require('../assets/images/Mountain/mountain1.jpg'),value:"mountain"},{imageUrl: require('../assets/images/Mountain/mountain2.jpg'),value:"mountain"},{imageUrl: require('../assets/images/Mountain/mountain3.jpg'),value:"mountain"},{imageUrl: require('../assets/images/Mountain/mountain4.jpg'),value:"mountain"},{imageUrl: require('../assets/images/Mountain/mountain5.jpg'),value:"mountain"},{imageUrl: require('../assets/images/Mountain/mountain6.jpg'),value:"mountain"},{imageUrl: require('../assets/images/Mountain/mountain7.jpg'),value:"mountain"},{imageUrl: require('../assets/images/Mountain/mountain8.jpg'),value:"mountain"},
        {imageUrl: require('../assets/images/Beach/Beach1.jpg'),value:"Beach"},{imageUrl: require('../assets/images/Beach/Beach2.jpg'),value:"Beach"},{imageUrl: require('../assets/images/Beach/Beach3.jpg'),value:"Beach"},{imageUrl: require('../assets/images/Beach/Beach4.jpg'),value:"Beach"},{imageUrl: require('../assets/images/Beach/Beach5.jpg'),value:"Beach"},{imageUrl: require('../assets/images/Beach/Beach6.jpg'),value:"Beach"},
        {imageUrl: require('../assets/images/Bird/Bird1.jpg'),value:"Bird"},{imageUrl: require('../assets/images/Bird/Bird2.jpg'),value:"Bird"},{imageUrl: require('../assets/images/Bird/Bird3.jpg'),value:"Bird"},{imageUrl: require('../assets/images/Bird/Bird4.jpg'),value:"Bird"},{imageUrl: require('../assets/images/Bird/Bird5.jpg'),value:"Bird"},{imageUrl: require('../assets/images/Bird/Bird6.jpg'),value:"Bird"},{imageUrl: require('../assets/images/Bird/Bird7.jpg'),value:"Bird"},{imageUrl: require('../assets/images/Bird/Bird8.jpg'),value:"Bird"},
        {imageUrl: require('../assets/images/Food/Food1.jpg'),value:"Food"},{imageUrl: require('../assets/images/Food/Food2.jpg'),value:"Food"},{imageUrl: require('../assets/images/Food/Food3.jpg'),value:"Food"},{imageUrl: require('../assets/images/Food/Food4.jpg'),value:"Food"},{imageUrl: require('../assets/images/Food/Food5.jpg'),value:"Food"},{imageUrl: require('../assets/images/Food/Food6.jpg'),value:"Food"},{imageUrl: require('../assets/images/Food/Food7.jpg'),value:"Food"}

    ]
    

    let[search,setSearch]=useState('mountain');


   


     const items = (
        <div className="container"> 
            <p className="h3 text-center my-5" style={{color:'#214663',textTransform:"capitalize"}}> {search==="mountain"?"Mountain":  search==="beach"?"Beach":  search==="bird"?"Birds":  search==="food"?"Foods": null   } Pictures</p>
            <div className="row">
                {
                    imageArray.filter((data)=>{
                        if(search==='' && search === null ){
                            return data

                        }
                        else if(data.value.toLowerCase().includes(search.toLowerCase())){
                            return data
                        }
                        }
                        ).map((image,index)=>{
                        return(
                            <React.Fragment key={index}>
                            
                                <div className="col-lg-3 col-md-5 col-sm-6 mb-4 d-flex align-items-stretch justify-content-center">
                                    <div> 
                                    <div className="card align-items-center">
                                        <div className="view overlay">
                                            <img src={image.imageUrl} className="card-img-top img-fluid" style={{height:200,maxWidth:250}} alt="Banner_Image"/>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )


    return(
        <React.Fragment>
            <section>
            <div className="container">
              <div className="text-center my-5 " >
                  <input type="text"  value={search} onChange={(e)=>setSearch(e.target.value)} className="p-2 rounded border-primary" style={{width:420,maxWidth:'100%'}} placeholder="Search..."/>
              </div>
              <div className="row justify-content-center">
                <button onClick={()=>{setSearch('mountain')}} className="btn btn-primary btn-md rounded" >Mountains</button>
                <button onClick={()=>{setSearch('beach')}} className="btn btn-primary btn-md rounded" >Beachs</button>
                <button onClick={()=>{setSearch('bird')}} className="btn btn-primary btn-md rounded" >Birds</button>
                <button onClick={()=>{setSearch('food')}} className="btn btn-primary btn-md rounded" >Foods</button>
              </div>
            </div>
          </section>
          <React.Fragment>
            <section>
                <React.Fragment>
                    {search.length>0?
                        <React.Fragment>
                            {items}
                        </React.Fragment>
                    : <p className="h4 m-5">No Image Available...</p>}
                </React.Fragment>
        </section>
      </React.Fragment>
          
        </React.Fragment>
    )
}

export default Home;
