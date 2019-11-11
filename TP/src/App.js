import React from 'react';
import './App.css';


class NavBar extends React.Component {
    render() {
        return(
            <button onClick={this.props.onClick}>
                {this.props.prenom}
            </button>
        );
    }
}

class LastComment extends React.Component {
    render() {
        return(
            <div className="boxComment">
                <a>{this.props.lastComment}</a>
                <button onClick={this.props.onClick}> 👍 C'est super ! </button>
            </div>
        );
    }
}

class Container extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      profile : [
        {
          photo: "Camille.png",
          prenom: "Camille",
          nom: "Dreyfus",
          date_naissance: "22/01/2000",
          lastComment: "salut je m'appelle Camille",
        },
        {
          photo: "Martine.png",
          prenom: "Martine",
          nom: "Falvert",
          date_naissance: "11/19/2010",
          lastComment: "salut je m'appelle Martine️",
        },
        {
          photo: "Boby.png",
          prenom: "Boby",
          nom: "Pellequer",
          date_naissance: "01/30/1999",
          lastComment: "salut je m'appelle Boby",
        }
      ],
      show_profile: 0
    };
  }

  handleClick(i){
      this.setState({show_profile: i})
  }

  handleClickLikes(i){
      const profileCopy = this.state.profile.slice();
      profileCopy[i].likes++;
      this.setState({profile: profileCopy})
  }

  render() {
    return(
        <body className="Container">
          <header>
            <nav className="navbar">
              <NavBar
                  prenom={this.state.profile[0].prenom}
                  onClick={() => this.handleClick(0)}/>
              <NavBar
                  prenom={this.state.profile[1].prenom}
                  onClick={() => this.handleClick(1)}/>
              <NavBar
                  prenom={this.state.profile[2].prenom}
                  onClick={() => this.handleClick(2)}/>
            </nav>
          </header>
          <div className="profile">
            <Profile
                photo={this.state.profile[this.state.show_profile].photo}
                prenom={this.state.profile[this.state.show_profile].prenom}
                nom={this.state.profile[this.state.show_profile].nom}
                date_naissance={this.state.profile[this.state.show_profile].date_naissance}
            />
            <LastComment
                lastComment={this.state.profile[this.state.show_profile].lastComment}
                likes={this.state.profile[this.state.show_profile].likes}
                onClick={() => this.handleClickLikes(this.state.show_profile)}/>
          </div>
        </body>
    );
  }
}

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: ""
        }
    }

    handleClick = (e) => {
        if (this.state.bgColor === "cornflowerblue") {
            this.setState({
                bgColor: "white"
            })
        } else {
        }
    }

    render() {
        return(
            <div className="profileB1" style={{backgroundColor: this.state.bgColor}}>
                <img src="Boby.png" alt="photo error"/>
                <div className="profileBio">
                    <a>{this.props.prenom}</a>
                    <a>{this.props.nom}</a>
                    <a>{this.props.date_naissance}</a>
                </div>
                <div className="profileB">
                    <button id="style"
                            onClick={this.handleClick}>
                        Change style
                    </button>
                </div>
            </div>
        );
    }
}

export default Container;
