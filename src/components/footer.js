import React from "react";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import FooterVideoMov from "../videos/footer.mp4";
import FooterVideo from "../videos/footer.webm";

const menu = require('../contents/urls.json')

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className={'video-container'}>
                    <div className={'video-wrapper'}>
                        <div className={'video-bg'}/>
                        <video autoPlay={true} loop={true} preload={'none'} playsInline={true} muted={true}>
                            <source src={FooterVideoMov} type='video/mp4;codecs="hvc1"'/>
                            <source src={FooterVideo} type="video/webm" />
                        </video>
                    </div>
                </div>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-12 col-sm-8'}>
                            <h2>Get more out <br/> of Juno</h2>

                            <div className={'row mt-4 mt-lg-5'}>
                                <div className={'col-12 col-sm-6 col-md-2 pb-4'}>
                                    <legend>Build</legend>

                                    <ul>
                                        <li><a href={menu.docs} target={'_blank'} rel={'noreferrer'}>Docs</a></li>
                                        <li><a href={menu.github} target={'_blank'} rel={'noreferrer'}>Github</a></li>
                                        <li><Link to={menu.ecosystem}>Ecosystem</Link></li>
                                    </ul>
                                </div>
                                <div className={'col-12 col-sm-6 col-md-3 pb-4'}>
                                    <legend>Community</legend>

                                    <ul>
                                        <li><a href={menu.github} target={'_blank'} rel={'noreferrer'}>Github</a></li>
                                        <li><a href={menu.discord} target={'_blank'} rel={'noreferrer'}>Chat on Discord</a></li>
                                        <li><a href={menu.telegram} target={'_blank'} rel={'noreferrer'}>Telegram</a></li>
                                        <li><a href={menu.twitter} target={'_blank'} rel={'noreferrer'}>Twitter</a></li>
                                        <li><a href={menu.blog} target={'_blank'} rel={'noreferrer'}>Blog</a></li>
                                    </ul>
                                </div>
                                <div className={'col-12 col-sm-6 col-md-3 pb-4'}>
                                    <legend>Ecosystem</legend>

                                    <ul>
                                        <li><Link to={menu.ecosystem+'#dapp'} state={{category:'dapp'}} target={'_blank'} rel={'noreferrer'}>Dapp</Link></li>
                                        <li><Link to={menu.ecosystem+'#tools'} state={{category:'tools'}} target={'_blank'} rel={'noreferrer'}>Tools</Link></li>
                                        <li><Link to={menu.ecosystem+'#contracts'} state={{category:'contracts'}} target={'_blank'} rel={'noreferrer'}>Contracts</Link></li>
                                    </ul>
                                </div>
                                <div className={'col-12 col-sm-6 col-md-4 pb-4'}>
                                    <legend>Network Data & Trackers</legend>

                                    <ul>
                                        <li><a href={menu.coingecko} target={'_blank'} rel={'noreferrer'}>Coingecko</a></li>
                                        <li><a href={menu.explorer1} target={'_blank'} rel={'noreferrer'}>Explorer 1</a></li>
                                        <li><a href={menu.explorer2} target={'_blank'} rel={'noreferrer'}>Explorer 2</a></li>
                                        <li><a href={menu['contract-data']} target={'_blank'} rel={'noreferrer'}>Contract data</a></li>
                                        <li><a href={menu['osmosis-dex']} target={'_blank'} rel={'noreferrer'}>Osmosis DEX data</a></li>
                                        <li><a href={menu.onchain1} target={'_blank'} rel={'noreferrer'}>On-chain data</a></li>
                                        <li><a href={menu.onchain2} target={'_blank'} rel={'noreferrer'}>On-chain data 2</a></li>
                                        <li><a href={menu.coinmarketcap} target={'_blank'} rel={'noreferrer'}>Coinmarketcap</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'black-box'}>
                        <div className={'row justify-content-between align-items-center'}>
                            <div className={'col-12 col-md-auto pb-3 pb-md-0'}>
                                <div className={'title'}>Meet the global social community:</div>
                            </div>
                            <div className={'col-12 col-md-auto'}>
                                <div className={'social'}>
                                    <div className={'row justify-content-center justify-content-mb-end'}>
                                        <div className={'col-auto'}>
                                            <a href={menu.twitter} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-twitter'} aria-label={'Twitter'}></i></a>
                                            <a href={menu.github} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-github'} aria-label={'Github'}></i></a>
                                            <a href={menu.discord} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-discord'} aria-label={'Discord'}></i></a>
                                            <a href={menu.telegram} target={'_blank'} rel={'noreferrer'}><i className={'icon-social-telegram'} aria-label={'Telegram'}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'copyright'}>
                        <div className={'row align-items-center justify-content-center'}>
                            <div className={'col-auto'}>
                                <div className={'row'}>
                                    <div className={'col-auto'}>Website created by</div>
                                    <div className={'col-auto px-0'}>
                                        <a href="https://designatives.com" target={'_blank'} rel={'noreferrer'}>
                                            <StaticImage
                                                src={'../images/designatives-logo.svg'}
                                                alt={'Designatives'}
                                                width={100}
                                                height={18}
                                                placeholder="blurred"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-auto'}>
                                <div className={'row'}>
                                    <div className={'col-auto ps-md-5'}>powered by</div>
                                    <div className={'col-auto px-0'}>
                                        <a href="https://akash.network" target={'_blank'} rel={'noreferrer'}>
                                            <svg width="82" height="18" viewBox="0 0 109 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg" className="text-white">
                                                <g clipPath="url(#footer-logo)">
                                                    <path
                                                        d="M51.0508 0.685715V19.8857H55.4515V15.0542L58.8574 19.8857H64.1584L59.3031 13.0299L64.0094 6.47726H58.7063L55.4515 11.0119V0.685715H51.0508Z"
                                                        fill="currentColor"></path>
                                                    <path
                                                        d="M108.858 10.5168V19.776H104.52V10.6183C104.52 9.68434 103.723 8.9232 102.746 8.9232C101.762 8.9232 100.965 9.68434 100.965 10.6183V19.776H96.626V0.530056H100.965V6.7632C101.794 6.17143 102.822 5.8176 103.934 5.8176C106.655 5.8176 108.858 7.92 108.858 10.5168Z"
                                                        fill="currentColor"></path>
                                                    <path
                                                        d="M43.3843 6.33842V7.00288C42.2053 6.27739 40.8048 5.85156 39.2961 5.85156C35.1265 5.85156 31.7461 9.07716 31.7461 13.0557C31.7461 17.0342 35.1265 20.2598 39.2961 20.2598C40.8048 20.2598 42.2053 19.8333 43.3843 19.1064V19.8079H47.7201V6.33842H43.3843ZM39.9307 16.5638C37.8052 16.5638 36.084 14.9194 36.084 12.8932C36.084 10.8648 37.8052 9.22253 39.9307 9.22253C42.0542 9.22253 43.7775 10.8648 43.7775 12.8932C43.7775 14.9194 42.0542 16.5638 39.9307 16.5638Z"
                                                        fill="currentColor"></path>
                                                    <path
                                                        d="M74.716 6.33806V7.00251C73.537 6.27703 72.1366 5.8512 70.6278 5.8512C66.4582 5.8512 63.0771 9.0768 63.0771 13.0553C63.0771 17.0338 66.4582 20.2594 70.6278 20.2594C72.1366 20.2594 73.537 19.8329 74.716 19.1061V19.8075H79.0519V6.33806H74.716ZM71.2625 16.5634C69.137 16.5634 67.4158 14.9191 67.4158 12.8928C67.4158 10.8645 69.137 9.22217 71.2625 9.22217C73.3859 9.22217 75.1092 10.8645 75.1092 12.8928C75.1092 14.9191 73.3859 16.5634 71.2625 16.5634Z"
                                                        fill="currentColor"></path>
                                                    <path
                                                        d="M85.3875 15.43C85.4068 15.7057 85.4834 15.9409 85.6145 16.1288C85.7525 16.3262 85.9332 16.4888 86.1512 16.6122C86.3858 16.7445 86.6603 16.8426 86.9708 16.905C87.2964 16.9708 87.6372 17.0051 87.9842 17.0051C88.7665 17.0051 89.355 16.8913 89.7358 16.6698C90.0566 16.4819 90.2008 16.2824 90.2008 16.019C90.2008 15.897 90.1739 15.7969 90.1207 15.7139C90.0904 15.6652 90.0035 15.5651 89.7717 15.4417C89.5537 15.3251 89.2522 15.2133 88.8741 15.1118C88.4775 15.0035 87.9614 14.8924 87.3412 14.7806C86.5168 14.625 85.7511 14.4234 85.0633 14.1868C84.361 13.9434 83.7477 13.6424 83.2427 13.2933C82.7177 12.9299 82.301 12.5054 82.003 12.0268C81.6946 11.531 81.5373 10.9578 81.5373 10.3214C81.5373 9.71116 81.6933 9.1187 81.9982 8.56396C82.299 8.01607 82.7356 7.52853 83.2958 7.12122C83.8436 6.72007 84.5148 6.39916 85.2937 6.16533C86.0629 5.93562 86.9384 5.81836 87.8959 5.81836C88.8942 5.81836 89.8048 5.93219 90.605 6.1571C91.4163 6.38545 92.1186 6.70705 92.6891 7.11093C93.2728 7.5251 93.7267 8.02773 94.0365 8.60305C94.3504 9.18179 94.5083 9.81608 94.5083 10.4908H90.0483C90.0483 10.1116 89.8958 9.81402 89.5675 9.55345C89.2218 9.27985 88.6596 9.14065 87.8959 9.14065C87.1777 9.14065 86.641 9.25585 86.3037 9.48419C86.0077 9.68373 85.8711 9.89836 85.8711 10.1644C85.8711 10.2892 85.898 10.403 85.9511 10.5093C85.9974 10.5992 86.0933 10.6904 86.2368 10.7802C86.4141 10.8899 86.6728 10.9948 87.0039 11.0915C87.355 11.1944 87.8111 11.2856 88.3567 11.3603C89.208 11.494 90.0055 11.6648 90.734 11.8725C91.486 12.0858 92.1455 12.3669 92.6967 12.7064C93.2693 13.0602 93.7246 13.4997 94.053 14.0106C94.3897 14.5352 94.5594 15.1626 94.5594 15.873C94.5594 16.5299 94.3911 17.1436 94.0599 17.6984C93.7336 18.2428 93.2693 18.7187 92.6753 19.1089C92.0972 19.4915 91.3936 19.7925 90.5837 20.0024C89.7855 20.2101 88.8852 20.3151 87.9083 20.3151C86.8287 20.3151 85.8573 20.1765 85.0205 19.9043C84.1802 19.6286 83.4642 19.2632 82.8895 18.8147C82.3066 18.3601 81.8581 17.8335 81.5546 17.2499C81.2483 16.6629 81.0938 16.0609 81.0938 15.4602L85.3875 15.43Z"
                                                        fill="currentColor"></path>
                                                    <path d="M8.96875 0L22.9421 24L27.5953 15.9991L18.282 0H8.96875Z"
                                                          fill="currentColor"></path>
                                                    <path d="M8.96875 16.4571L13.8013 24H23.4561L18.6304 16.4571H8.96875Z"
                                                          className="fill-[#000000] dark:fill-[#fafafa]" fill-opacity="0.4"></path>
                                                    <path d="M4.82911 7.54286L0 15.7714L4.83256 24L14.4873 7.54286H4.82911Z"
                                                          fill="currentColor"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="footer-logo">
                                                        <rect width="109" height="24" fill="currentColor"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
