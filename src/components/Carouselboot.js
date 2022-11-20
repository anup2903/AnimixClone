import React from 'react'
export default function Carouselboot() {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide row py-3 "
        data-ride="carousel"
      >
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <div className="carouselItem row">
              <div className="photo1 col-sm-2">
                <img
                  class="cimage"
                  src="https://m.media-amazon.com/images/M/MV5BODBmM2JmY2EtMzRlZC00Njk0LTg5NGMtZjdjMjQ5ZTJhYWQ3XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg"
                  alt="First slide"
                />
              </div>
              <div className="content col-sm-10">
                <h2>Blue Lock</h2>
                <p>
                  After a disastrous defeat at the 2018 World Cup, Japan's team
                  struggles to regroup. The Japan Football Union is hell-bent on
                  creating a striker who hungers for goals and thirsts for
                  victory, to do so, they've gathered 300 of Japan's best and
                  brightest youth players. Who will emerge to lead the team?
                </p>
                <p>Sports, Team Sports, Shounen</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="carouselItem row">
              <div className="photo2 col-sm-2">
                <img
                  class="cimage "
                  src="https://cdn.myanimelist.net/images/anime/1806/126216.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="content col-sm-10">
                <h2>Chainsaw Man</h2>
                <p>
                  Denji is a teenage boy living with a Chainsaw Devil named
                  Pochita. He has been living a rock-bottom life while repaying
                  his debt by harvesting devil corpses with Pochita. One day,
                  Denji is betrayed and killed. As his consciousness fades, he
                  makes a contract with Pochita and gets revived as 'Chainsaw
                  Man' — a man with a devil's heart.
                </p>
                <p>Action, Gore, Horror, Pet, Supernatural, Shounen</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="carouselItem row">
              <div className="photo3 col-sm-2">
                <img
                  class="cimage"
                  src="https://m.media-amazon.com/images/M/MV5BMWM4Njg2MjUtODU3OS00MGNmLWIyNTctZGZkNTdjN2JhNmU2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg"
                  alt="Third slide"
                />
              </div>
              <div className="content col-sm-10">
                <h2>Spy x Family Part 2</h2>
                <p>
                  Making a family in a week?! Nobody can pull that off except
                  Loid Forger, a special spy agent. 'Operation Strix' is putting
                  together a family in order to infiltrate social gatherings
                  organized by the elite school. World peace is now in the hands
                  of this brand-new family as they embark on an adventure full
                  of surprises.
                </p>
                <p>Comedy, Childcare, Action, Shounen</p>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          {/* <span class="sr-only">Previous</span> */}
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          {/* <span class="sr-only">Next</span> */}
        </a>
      </div>
    </>
  );
}
