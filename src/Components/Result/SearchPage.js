import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { CiShoppingTag } from 'react-icons/ci'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { IoMdMore } from 'react-icons/io'
import { BsFillImageFill } from 'react-icons/bs'
import { RxVideo } from 'react-icons/rx'
import { AiOutlineSetting } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import Search from '../Home/Search'
import './SearchPage.css'
import useGoogleSearch from '../useGoogleSearch'

function SearchPage() {

    const [{ term, }] = useStateValue();
    const {data} = useGoogleSearch(term);
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to="/">
                    <img className='mainlogo' alt="Ai-Search Engine" src='https://ashishingle.netlify.app/images/favicon.ico' />

                </Link>

                <div className='searchPage__headerBody'>
                    <Search hidebuttons className='searchPage__searchbar' />

                    <div className='searchPage__options'>

                        <div className='searchPage__optionLeft'>
                            <div className='searchPage__option'>
                                <IoSearch />
                                <a href='/all'>All</a>
                            </div>
                            <div className='searchPage__option'>
                                <RxVideo />
                                <a href='/video'>Video</a>
                            </div>
                            <div className='searchPage__option'>
                                <BsFillImageFill />
                                <a href='/images'>images</a>
                            </div>
                            <div className='searchPage__option'>
                                <FaMapMarkedAlt />
                                <a href='/maps'>Maps</a>
                            </div>
                            <div className='searchPage__option'>
                                <CiShoppingTag />
                                <a href='/shopping'>Shopping</a>
                            </div>
                            <div className='searchPage__option'>
                                <IoMdMore />
                                <a href='/more'>More</a>
                            </div>

                        </div>

                        <div className='searchPage__optionRight'>
                            <div className='searchPage__option'>
                                <AiOutlineSetting />
                                <a href='/setting'>Setting</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term && (



                <div className='searchPage__results'>
                    <p className='searchPage__resultCount'>
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className='searchPage__result'>
                            <a href={item.link} className="SearchPage__resultLink">
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className="searchPage__resultImage" src={item.pagemap?.cse_image[0]?.src} alt="" />
                                )}
                                {item.displayLink}
                            </a>

                            <a href={item.link} className="searchPage__resultTitle">
                                <h2>{item.title}</h2>
                            </a>

                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )
            }

        </div>
    )
}


export default SearchPage;