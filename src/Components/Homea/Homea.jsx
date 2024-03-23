import React from 'react'
import {useForm} from 'react-hook-form'
import './Homea.css'
import './Homea.css'
import { useNavigate,NavLink } from 'react-router-dom'

function Homea() {
  let {register, handleSubmit,formState:{errors}}= useForm();
 let navigate = useNavigate();
 
  function registerSubmit(newUser){
      console.log(newUser)
      
      navigate('/Home')
  }


  return (
    <div className='bg-white'>
       <header>
        {/* <nav>
            <h4>MR.travel</h4>
            <ul id="menu_bx">
                <li><a href="#">Discover</a></li>
                <li><a href="#">Coummunity</a></li>
                <li><a href="#">Special Deals</a></li>
                <li><a href="#">About US</a></li>
                <li><a href="/Signup">Register</a></li>
            </ul>
            <i className="bi bi-three-dots"></i>
        </nav> */}
        <div className="content">
            <div className="cont_bx">
                <h1>The right desitination for you and your family</h1>
                <p>Creative taglines have the capability of capturing the attention of potential custumer.</p>
                <button>Start your search</button>
            </div>
            
            <div className="trip_bx ">
                <div className="search_bx">
                <form className='flex' onSubmit={handleSubmit(registerSubmit, ()=>{console.log('error')})}>
                    <div  className="card ">
                        <h4>From <i className="bi bi-caret-down-fill"></i></h4>
                        <input  className='border-2 border-gray-500' type="text" placeholder="Enter your destination" {...register('From', {required:true})}/>
                        {errors.From?.type ==='required' && (<h3 className='px-1 text-sm  text-red-600'>! Enter destination</h3>)}
                    </div>
                    <div  className="card ">
                        <h4>Destination<i className="bi bi-caret-down-fill"></i></h4>
                        <input  className='border-2 border-gray-500' type="text" placeholder="Enter your destination" {...register('destination', {required:true})}/>
                        {errors.destination?.type ==='required' && (<h3 className='px-1 text-sm  text-red-600'>! Enter destination</h3>)}
                    </div>
                    <div className="card">
                        <h4>Start Date <i className="bi bi-caret-down-fill"></i></h4>
                        <input className='border-none' type="date" {...register('startDate', {required:true})}/>
                        {errors.startDate?.type ==='required' && (<h3 className='px-1 text-sm  text-red-600'>! Please Select a Valid date</h3>)}
                    </div>
                    <div className="card">
                        <h4>End Date <i className="bi bi-caret-down-fill"></i></h4>
                        <input className='border-none' type="date" {...register('endDate', {required:true})}/>
                        {errors.endDate?.type ==='required' && (<h3 className='px-1 text-sm  text-red-600'>! Please Select a Valid date</h3>)}
                    </div>
                    <div className="card">
                        <h4>People <i className="bi bi-caret-down-fill"></i></h4>
                        <input className='input' type="number" placeholder="How many People?" {...register('strength', {required:true})}/>
                        {errors.strength?.type ==='required' && (<h3 className='px-1 text-sm  text-red-600'>! Enter destination</h3>)}
                    </div>
                   
                    <button className='rounded-full bg-black text-white p-2' type='submit'>Explore Now</button>
                    </form>
                </div>
                
                
                <div className="travel_bx">
                    <h4>Places to visit</h4>
                    <div className="cards">
                        <div className="card">
                        <h3>GOA </h3>
                            <img src="https://imgeng.jagran.com/images/2023/jul/goa1689842917048.jpg" alt=""/>
                            <div className="btn_city">
                                <a className='m-1' href="">Read Now</a>
                                
                            </div>
                        </div>
                        <div className="card">
                            <h3>KASHMIR </h3>
                            <img src="https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407.jpg" alt=""/>
                            <div className="btn_city">
                                <a className='m-1' href="">Read Now</a>
                                
                            </div>
                        </div>
                        <div className="card">
                            <h3>NORTH EAST </h3>
                            <img src="https://travelogyindia.b-cdn.net/storage/app/upload/northeast-history.jpg" alt=""/>
                            <div className="btn_city">
                                <a className='m-1' href="">Read Now</a>
                               
                            </div>
                        </div>
                        <div className="card">
                            <h3>KERALA </h3>
                            <img src="https://media.istockphoto.com/id/1246366598/photo/a-scenic-view-of-boats-under-a-blue-sky-in-backwaters-situated-in-allepey-town-located-in.jpg?s=612x612&w=0&k=20&c=YBv_3nP-6YjvN9JRhaNsBmq8ke4azCgvGLS5h3r9jSk=" alt=""/>
                            <div className="btn_city">
                                <a className='m-1' href="">Read Now</a>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div className="offers">
        <h1>Best tour Package offers for You</h1>
        <p>choose your next destination</p>
        <div className="cards">
            <div className="card">
                <h3>New Delhi</h3>
                <div className="img_text">
                    <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/c5/e8/5c.jpg" alt=""/>
                    <h4>Inclded: Air ticket, Hotel, Breakfast, Tours, Airport Transfer</h4>
                </div>
                <div className="cont_bx">
                    <div className="price">
                        <div className="heart_chat">
                            <i className="bi bi-heart-fill"><span>86415</span></i>
                            <i className="bi bi-chat-fill"><span>4586</span></i>
                        </div>
                        <div className="info_price">
                            <a href="">More Info</a>
                            <h4>$2648</h4>
                        </div>
                    </div>
                    <div className="dayes">5 Days <br/> Delhi</div>
                </div>
            </div>
            <div className="card">
                <h3>Mumbai Central</h3>
                <div className="img_text">
                    <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/Chhatrapati-Shivaji-Terminus-railway-station-mumbai.jpg" alt=""/>
                    <h4>Inclded: Air ticket, Hotel, Breakfast, Tours, Airport Transfer</h4>
                </div>
                <div className="cont_bx">
                    <div className="price">
                        <div className="heart_chat">
                            <i className="bi bi-heart-fill"><span>86415</span></i>
                            <i className="bi bi-chat-fill"><span>4586</span></i>
                        </div>
                        <div className="info_price">
                            <a href="">More Info</a>
                            <h4>$2648</h4>
                        </div>
                    </div>
                    <div className="dayes">5 Days <br/> Mumbai</div>
                </div>
            </div>
            <div className="card">
                <h3>Bengaluru</h3>
                <div className="img_text">
                    <img src="https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/4-things-that-will-make-you-fall-in-love-with-Bengaluru.jpg?VersionId=6_FxGDURKlR_62oAhhmjQM8D1beucC9p&itok=V0yIpf6l" alt=""/>
                    <h4>Inclded: Air ticket, Hotel, Breakfast, Tours, Airport Transfer</h4>
                </div>
                <div className="cont_bx">
                    <div className="price">
                        <div className="heart_chat">
                            <i className="bi bi-heart-fill"><span>86415</span></i>
                            <i className="bi bi-chat-fill"><span>4586</span></i>
                        </div>
                        <div className="info_price">
                            <a href="">More Info</a>
                            <h4>$2648</h4>
                        </div>
                    </div>
                    <div className="dayes">7 Days <br/> Banglore</div>
                </div>
            </div>
            <div className="card">
                <h3>Vadodara</h3>
                <div className="img_text">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Statue_of_Unity.jpg/1200px-Statue_of_Unity.jpg" alt=""/>
                    <h4>Inclded: Air ticket, Hotel, Breakfast, Tours, Airport Transfer</h4>
                </div>
                <div className="cont_bx">
                    <div className="price">
                        <div className="heart_chat">
                            <i className="bi bi-heart-fill"><span>86415</span></i>
                            <i className="bi bi-chat-fill"><span>4586</span></i>
                        </div>
                        <div className="info_price">
                            <a href="">More Info</a>
                            <h4>$2648</h4>
                        </div>
                    </div>
                    <div className="dayes">7 Days <br/> Vadodara</div>
                </div>
            </div>
        </div>
    </div>
    <div className="destination">
        <div className="des_bx">
            <h4>Our Destination</h4>
            <p>choose your next Destination</p>
            <li>India</li>
            <li>Dubai</li>
            <li>USA</li>
            <li>Vietnam</li>
            <li>Russia</li>
            <li>Brazil</li>
            <h6>Included: Air ticket, Hotel, Breakfast, Tours, Airport transfer</h6>
            <button>MORE INFO</button>
        </div>
        <div className="img_bx">
            <img src="https://wallpapers.com/images/featured/airplane-k2bvoms91kvb0tfp.jpg" alt=""/>
            <div className="msg">
                
                <div className="cont">
                    <h4>India</h4>
                    <div className="icon">
                        <i className="bi bi-heart-fill"><span>86415</span></i>
                        <i className="bi bi-chat-fill"><span>4586</span></i>
                    </div>
                </div>
            </div>
            <div className="msg">
               
                <div className="cont">
                    <h4>United State</h4>
                    <div className="icon">
                        <i className="bi bi-heart-fill"><span>86415</span></i>
                        <i className="bi bi-chat-fill"><span>4586</span></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <footer>
        <h2>Subscribe & <br/> get special discount</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque animi .</p>
        <div className="input">
            <input  className='' type="text" placeholder="Enter your Email Address"/>
            <button>Subscribe</button>
        </div>
        <ul>
            <li>7823 <br/> <h6>Years Serving the travel Industry</h6></li>
            <li>6374 <br/><h6>Global <br/> Patnership</h6> </li>
            <li>1496 <br/> <h6>Industry Awards since 2022</h6></li>
            <li>5658 <br/> <h6>Subscribe</h6></li>
        </ul>
    </footer> */}
    </div>
  )
}

export default Homea