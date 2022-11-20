import React ,{useState}from 'react'

export default function Genre (){
  const[down, setdown]= useState(false);
  return (
    <>
      <div className="genre gen">
        <div className="heading3">
          <div className="headings4">
            <p className="genre">Genres</p>
          </div>
          <div className="rows1">
            <div className="left">
              <div className="check">
                <label class="form1">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Action</span>
                </label>
              </div>
              <div className="check">
                <label class="form1">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Anti-Hero</span>
                </label>
              </div>
              <div className="check">
                <label class="form1">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">College</span>
                </label>
              </div>
              <div className="check">
                <label class="form1">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Drama</span>
                </label>
              </div>
              <div className="check">
                <label class="form1">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Ecchi</span>
                </label>
              </div>
              <div className="check">
                <label class="form1">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Gag Humor</span>
                </label>
              </div>
              <div className="check">
                <label class="form1">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Harem</span>
                </label>
              </div>
              <div className="check">
                <label class="form1">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Horror</span>
                </label>
              </div>
              <div className="check">
                <label class="form1">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Issekai</span>
                </label>
              </div>
              {down && (
                <div className="showon">
                  <div className="check">
                    <label class="form1">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Josei</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form1">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Magical girl</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form1">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Mecha</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form1">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Movie</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form1">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Mythology</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form1">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Otaku</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form1">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Police</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form1">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Racing</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form1">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Romance</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form1">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Samurai</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className="right">
              <div className="check">
                <label class="form2">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Adventure</span>
                </label>
              </div>
              <div className="check">
                <label class="form2">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">CGDCT</span>
                </label>
              </div>
              <div className="check">
                <label class="form2">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Comedy</span>
                </label>
              </div>
              <div className="check">
                <label class="form2">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Dub</span>
                </label>
              </div>
              <div className="check">
                <label class="form2">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Fantasy</span>
                </label>
              </div>
              <div className="check">
                <label class="form2">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Game</span>
                </label>
              </div>
              <div className="check">
                <label class="form2">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Historical</span>
                </label>
              </div>
              <div className="check">
                <label class="form2">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Idol</span>
                </label>
              </div>
              <div className="check">
                <label class="form2">
                  <input type="checkbox" name="checkbox" />
                  <span className="action">Iyashikei</span>
                </label>
              </div>
              {down && (
                <div className="showdown">
                  <div className="check">
                    <label class="form2">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Kids</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form2">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Martial Arts</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form2">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Military</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form2">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Music</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form2">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Mystery</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form2">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Parody</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form2">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Psychological</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form2">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Revenge</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form2">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">Rural</span>
                    </label>
                  </div>
                  <div className="check">
                    <label class="form2">
                      <input type="checkbox" name="checkbox" />
                      <span className="action">School</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="show">
          <i class="fa-sharp fa-solid fa-angle-down" onClick={()=>setdown(!down)} >
          {down===true? <i class="fa-sharp fa-solid fa-angle-up"/> : " "}
          </i>
        </div>
      </div>
    </>
  );
}
