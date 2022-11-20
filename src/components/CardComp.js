import React ,{useState}from "react";

export default function CardComp() {
  const[more ,setmore]=useState(false);
  return (
    <>
      <div className=" cardcomp">
        <div className="row compcard">
          <div class="card col-md col-sm-6 ">
            <div className="card1 hover-shadow">
              <img
                src="https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">One Piece</p>
                <p className="epi">EP 1035/?</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BY2I2MzI1ODYtMWRlOS00MzdhLWEyOWEtYWJhNmFiZTIxMGJhXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_FMjpg_UX1000_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Dragon Ball Super</p>
                <p className="epi">EP 131/131</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 card2">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Naruto: Shippuuden</p>
                <p className="epi">EP 500/500</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://cdn.myanimelist.net/images/anime/1764/126627.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Bleach: Sennen Kessen-hen</p>
                <p className="epi">EP 4/?</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNjkyNDI2MTgtN2Y3NS00M2RjLWJhNDMtMmNmZmUwMDQwZTE1XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Haikyuu</p>
                <p className="epi">EP 25/25</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Shingeki no Kyojin</p>
                <p className="epi">EP 25/25</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row compcard">
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Hunter x Hunter</p>
                <p className="epi">EP 148/148</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://cdn.myanimelist.net/images/anime/2/88336.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Black Clover</p>
                <p className="epi">EP 170/170</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZmNiZTk5MDQtMjIwMi00ZDU4LTgxOWMtODYwOGU5N2E5YzY0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Gintama</p>
                <p className="epi">EP 265/265</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Kimetsu no Yaiba</p>
                <p className="epi">EP 26/26</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Jujutsu Kaisen</p>
                <p className="epi">EP 24/24</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_FMjpg_UX1000_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Kimi no Na wa</p>
                <p className="epi">Movie</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row compcard">
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMWI4MjNjNjgtNWE0MC00NThmLTg0YzEtMDZlODA5NTJhYzY3XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">To Your Eternity</p>
                <p className="epi">EP 20/20</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMmI5NmFlZjItOTBhOC00NGI0LWIyNDAtODJhOTJjZDEyMTYyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Fullmetal Alchemist</p>
                <p className="epi">EP 51/51</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Steins;Gate</p>
                <p className="epi">EP 24/24</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://resizing.flixster.com/fD69MzhR7_QUmpCkLfroViOIIHc=/300x300/v2/https://resizing.flixster.com/vSxHBCXepARjD_KeyUYoasEUnPg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA0NjI2NzY1LTE0ZWQtNGI5YS05Nzc2LWY3M2EwMjlmYzI0MS5qcGc="
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Violet Evergarden</p>
                <p className="epi">Movie</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BM2ZkYTAwMGMtOGEwOS00MzBjLTgxOGYtZTYwY2E1ZjMyZmY4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Monster</p>
                <p className="epi">EP 74/74</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMGM2MzA5YzYtODc0Ni00ZjU4LWI4ZmUtZGJjNGU0ODY1MGJkXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Mushoku Tensei : Jobless...</p>
                <p className="epi"> EP 11/11</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row compcard">
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZjQzN2U4MDAtNDRjZi00MmEwLWIzZGQtZmQyYjI1ZDI4OWE5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Kingdom</p>
                <p className="epi">EP 26/26</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://cdn.myanimelist.net/images/about_me/ranking_items/15171850-887d6892-5ec4-4382-9e0a-186b546c5561.jpg?t=1655992207"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Dr. Stone</p>
                <p className="epi">EP 24/24</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">The Promised Neverland</p>
                <p className="epi">EP 24/24</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://m.media-amazon.com/images/M/MV5BYWY3MTliMWYtMmQ1Zi00NDE0LTkzYmUtZDI4MDM1MTgwZTc4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Made in Abyss</p>
                <p className="epi">EP 13/13</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Code_Geass_R1_box_set_cover.jpg/220px-Code_Geass_R1_box_set_cover.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">Code Geass: Lelouch...</p>
                <p className="epi">EP 25/25</p>
              </div>
            </div>
          </div>
          <div class="card col-md col-sm-6 ">
            <div className="card1">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body pt-1">
                <p class="card-text ">A silent Voice</p>
                <p className="epi">Movie</p>
              </div>
            </div>
          </div>
        </div>
        {more && (
          <div className="more">
            <div className="row compcard">
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Hunter x Hunter</p>
                    <p className="epi">EP 148/148</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://cdn.myanimelist.net/images/anime/2/88336.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Black Clover</p>
                    <p className="epi">EP 170/170</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BZmNiZTk5MDQtMjIwMi00ZDU4LTgxOWMtODYwOGU5N2E5YzY0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Gintama</p>
                    <p className="epi">EP 265/265</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Kimetsu no Yaiba</p>
                    <p className="epi">EP 26/26</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Jujutsu Kaisen</p>
                    <p className="epi">EP 24/24</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_FMjpg_UX1000_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Kimi no Na wa</p>
                    <p className="epi">Movie</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row compcard">
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Hunter x Hunter</p>
                    <p className="epi">EP 148/148</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://cdn.myanimelist.net/images/anime/2/88336.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Black Clover</p>
                    <p className="epi">EP 170/170</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BZmNiZTk5MDQtMjIwMi00ZDU4LTgxOWMtODYwOGU5N2E5YzY0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Gintama</p>
                    <p className="epi">EP 265/265</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Kimetsu no Yaiba</p>
                    <p className="epi">EP 26/26</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Jujutsu Kaisen</p>
                    <p className="epi">EP 24/24</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_FMjpg_UX1000_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Kimi no Na wa</p>
                    <p className="epi">Movie</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row compcard">
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Hunter x Hunter</p>
                    <p className="epi">EP 148/148</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://cdn.myanimelist.net/images/anime/2/88336.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Black Clover</p>
                    <p className="epi">EP 170/170</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BZmNiZTk5MDQtMjIwMi00ZDU4LTgxOWMtODYwOGU5N2E5YzY0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Gintama</p>
                    <p className="epi">EP 265/265</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Kimetsu no Yaiba</p>
                    <p className="epi">EP 26/26</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Jujutsu Kaisen</p>
                    <p className="epi">EP 24/24</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_FMjpg_UX1000_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Kimi no Na wa</p>
                    <p className="epi">Movie</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row compcard">
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Hunter x Hunter</p>
                    <p className="epi">EP 148/148</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://cdn.myanimelist.net/images/anime/2/88336.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Black Clover</p>
                    <p className="epi">EP 170/170</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BZmNiZTk5MDQtMjIwMi00ZDU4LTgxOWMtODYwOGU5N2E5YzY0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Gintama</p>
                    <p className="epi">EP 265/265</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Kimetsu no Yaiba</p>
                    <p className="epi">EP 26/26</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Jujutsu Kaisen</p>
                    <p className="epi">EP 24/24</p>
                  </div>
                </div>
              </div>
              <div class="card col-md col-sm-6 ">
                <div className="card1">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_FMjpg_UX1000_.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body pt-1">
                    <p class="card-text ">Kimi no Na wa</p>
                    <p className="epi">Movie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <button className="Load" onClick={() => setmore(!more)}>
          {more === false ? (
            <div className="moreload">
              <i class="fa-solid fa-angle-down"></i>
              <p>Load more</p>
            </div>
          ) : (
            <div className="showless">
              <i class="fa-solid fa-angle-up"></i>
              <p>Show Less</p>
            </div>
          )}
        </button>
      </div>
    </>
  );
}
