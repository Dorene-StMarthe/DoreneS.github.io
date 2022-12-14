import {React, Component} from 'react'
import '../App.css'

class Navbar extends Component {
    render() {

    
    return (
    <nav className="Navbar">
    <a href="#" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
    <a href="#" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Skills</a>
    <a href="#" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About Me</a>
    <a href="#" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact Me</a>
    <a href="#" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Blog</a>
  </nav>
        )
    }
}

export default Navbar;