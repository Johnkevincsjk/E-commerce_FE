import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SiSearxng } from "react-icons/si";

export default function SearchBox() {
    const Search_nav = useNavigate()

    const [search_val, setSearch_val] = useState()

    const handleSearch = (e) => {
        e.preventDefault();
        Search_nav(`/search?keyword=${search_val}`)
    }
    return (
        <div>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onBlur={handleSearch} onChange={(e) => setSearch_val(e.target.value)} />
                <button class="btn btn-outline-dark" type="submit" onClick={handleSearch}><SiSearxng /></button>
            </form>
        </div>
    )
}

