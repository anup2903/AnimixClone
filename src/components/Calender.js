import React,{useState} from 'react';

export default function Calender (){
 
 
  const [show , setshow]= useState(false);
  const[sho ,setsho]= useState(false);
  return (
    <>
      <div className="cal">
        <div className="incal">
          <div className="season">
            <span className="headin">Season :</span>
            <div className="dropdown">
              <div className="ses">
                <div className="highlight">
                  <h6>Winter</h6>
                  <i
                    class="fa-sharp fa-solid fa-caret-down"
                    onClick={() => setshow(!show)}
                  ></i>
                </div>
                {show && (
                  <div className="ses1 ">
                    <h6 className='sesdrop'>Winter</h6>
                    <h6 className='sesdrop'>Summer</h6>
                    <h6 className='sesdrop'>Spring</h6>
                    <h6 className='sesdrop'>Fall</h6>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="Year">
            <span className="headin">Year :</span>
            <div className="dropdown">
              <div className="yer">
                <div className=" high1">
                  <h6>2022</h6>
                  <i class="fa-sharp fa-solid fa-caret-down leftfa" onClick={()=>setsho(!sho)}></i>
                </div>
                {sho && (
                  <div className="yer1">
                    <h6 className='sesdrop'>2022</h6>
                    <h6 className='sesdrop'>2021</h6>
                    <h6 className='sesdrop'>2020</h6>
                    <h6 className='sesdrop'>2019</h6>
                    <h6 className='sesdrop'>2018</h6>
                    <h6 className='sesdrop'>2017</h6>
                    <h6 className='sesdrop'>2016</h6>
                    <h6 className='sesdrop'>2015</h6>
                    <h6 className='sesdrop'>2014</h6>
                    <h6 className='sesdrop'>2013</h6>
                    <h6 className='sesdrop'>2012</h6>
                    <h6 className='sesdrop'>2011</h6>
                    <h6 className='sesdrop'>2010</h6>
                    <h6 className='sesdrop'>2009</h6>
                    <h6 className='sesdrop'>2008</h6>
                    <h6 className='sesdrop'>2007</h6>
                    <h6 className='sesdrop'>2006</h6>
                    <h6 className='sesdrop'>2005</h6>
                    <h6 className='sesdrop'>2004</h6>
                    <h6 className='sesdrop'>2003</h6>
                    <h6 className='sesdrop'>2002</h6>
                    <h6 className='sesdrop'>2001</h6>
                    <h6 className='sesdrop'>2000</h6>
                    <h6 className='sesdrop'>1999</h6>
                    <h6 className='sesdrop'>1998</h6>
                    <h6 className='sesdrop'>1997</h6>
                    <h6 className='sesdrop'>1996</h6>
                    <h6 className='sesdrop'>1995</h6>
                    <h6 className='sesdrop'>1994</h6>
                    <h6 className='sesdrop'>1993</h6>
                    <h6 className='sesdrop'>1992</h6>
                    <h6 className='sesdrop'>1991</h6>
                    <h6 className='sesdrop'>1990</h6>
                    <h6 className='sesdrop'>1989</h6>
                    <h6 className='sesdrop'>1988</h6>
                    <h6 className='sesdrop'>1987</h6>
                    <h6 className='sesdrop'>1986</h6>
                    <h6 className='sesdrop'>1985</h6>
                    <h6 className='sesdrop'>1984</h6>
                    <h6 className='sesdrop'>1983</h6>
                    <h6 className='sesdrop'>1982</h6>
                    <h6 className='sesdrop'>1981</h6>
                    <h6 className='sesdrop'>1980</h6>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="GO">
            <button className="go">
              <p className="Go">GO</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}