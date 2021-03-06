import { injectGlobal } from 'emotion'
//libraries
import React from 'react'
import styled from 'react-emotion'
// design components
import logo from '../images/flyvision-logo.svg'
import header from '../images/header.svg'
import background from '../images/background.png'
import bgWhite from '../images/bg-white.png'
import bgBenefits from '../images/bg-benefits.svg'
import './index.css'
//images
import photo1 from '../photos/1.jpg'
import photo2 from '../photos/2.jpg'
import photo3 from '../photos/3.jpg'
import photo4 from '../photos/4.jpg'
import photo5 from '../photos/5.jpg'
import photo6 from '../photos/6.jpg'
import photo7 from '../photos/7.jpg'
import photo8 from '../photos/8.jpg'
//portfolio logos
import christian from '../portfolio/christian.svg'
import hublot from '../portfolio/hublot.svg'
import samsung from '../portfolio/samsung.svg'
import swarovski from '../portfolio/swarovski.svg'
import telenor from '../portfolio/telenor.svg'

import headerVideo from '../images/FlyvisionReCut.mp4'

//icons
import Octicon,{
    Globe,
    Settings,
    Tag,
    Eye,
    Organization,
    Gift
} from '@githubprimer/octicons-react'

injectGlobal`
body {
margin: 0;
}
`

//background
const Header = styled('div')`
`;
const Body = styled('div')`
    // background: url(${bgWhite});
    background-repeat:no-repeat;
    background-size: cover;

    padding: 40px 0;
`;
const Benefits = styled('div')`
    // background: url(${bgBenefits});
    background-repeat:no-repeat;
    background-size: cover;
    padding: 40px 0;
`;

const Footer = styled('div')` 
    ${ tw('bg-blue')}
    background-color: #000
`
;


//logo
const Container = styled('div')`
    ${tw('flex justify-center mb-4')};
    img {
        margin:50px; 
        height: 100%;
        width: 100%;
        }
    background: #fff;
    filter: invert(1);
    margin: 0;
`;

//body
const Hero = styled('div')`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr) );
    margin: 120px 0;

    p {
        font-family: InterUIRegular;
        margin: 0;
        margin-top: 16px;
    }

    img {
        max-width: 1fr;
    }

`;

//
const HeroContent = styled('div')`
    ${tw('flex')};
    justify-content: ${props => props.justify};
    align-items: center;
    font-size: 18px;
    box-sizing: border-box;
`;
//photos
const PhotoGrid = styled('div')`
    ${tw('flex justify-center flex-wrap')};
    margin: ${props => props.margin};
    img {
        max-width: 220px;
    }
`;

const HeaderImage = styled('img')`
    ${tw('w-1/4 mt-8 flex-none')};
    min-width: 300px;
    margin: 0;
`;

const BlueButton = styled('button')`
    ${tw('flex-initial bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full')};
`;

const VideoButton = styled('button')`${tw('flex-initial font-bold hover:bg-grey leading-normal px-4 py-1 rounded-full text-xs')};`;

const Buttons = styled('div')`${tw('flex justify-center')};`;

const Paragraph = styled('p')`${tw('text-sm')};
    font-family: InterUIRegular;
    text-align: ${props=>props.ta};
    padding: ${props=>props.padding};
    margin: ${props=>props.margin};
    color: ${props => props.color};
    font-size: ${props=>props.fs};
    line-height: ${props=>props.lh};

    a {
        text-decoration: none;
        color: #000;
        cursor: pointer;
        transition: 0.9s;
    }

    a:hover {
        text-decoration: underline;
    }
`;

const HeaderContainer = styled('div')`
    display: flex;
    flex-wrap: no-wrap;
    padding: ${props => props.padding};
    justify-content: ${props => props.justify};
    margin: ${props => props.margin};
    p {
        margin: 0;
    }
`;

const ParagraphHeader = styled('div')` ${ tw('uppercase')};
    font-family: ${props=>props.ff};
    font-size: ${props=>props.fs};
    color: ${props => props.color};
`;

const Icons = styled('div')`
    ${tw('flex flex-wrap items-center justify-center')};
    margin: 80px 0;
`;

const Box = styled('div')`
${tw('flex flex-wrap justify-center w-1/3')};
margin: 40px 0;

svg {
    width: 100%;
}
p {
    width: 70%;
    text-align: center;
    font-family: InterUIRegular;
}
`;

const Portfolio = styled('div')`
    ${tw('flex flex-wrap justify-around') };
    background: #000;
    padding: 30px 0 10px 0;
    // margin: 20px 0;

    img {
        width: 15%;
        height: 100px;
        margin: 20px;
    }
`;

const Photo = styled('div')`
    img {
        border-radius: 3px;
        box-shadow: 0 5px 5px #dddddd;
    }
    
    margin: 35px;
    overflow: hidden;
`;

const Divider = styled('div')`
    font-size: ${props=>props.fs};
    background-color: ${props=>props.color};
    margin: 0 12px;
    width: 3px;
    border-radius: 2px;
`;

const InquireForm = styled('form')` ${ tw('w-full max-w-sm') };
margin-left: auto;
margin-right: auto;
button {
    display: block;
    margin: 50px auto;

    &:hover {
        cursor: pointer;
    }
}
`;

const InquireDiv = styled('div')`
display: flex;
border-bottom-style: solid;
border-color: #3490dc;

`;

const InquireInput = styled('input')`
    appearance: none;
    border: none;
    width: full;
    color: #606f7b;
    padding-bottom: 10px;
    font-size: 1.25em;
    margin: ${props => props.margin};
`;

const Video = styled('video')`
  width: 100%;
  height: auto;
`;


export default () => (
    <React.Fragment>
        <Header>
            <Container>
                <img src={logo} />
            </Container>
            <Video autoPlay muted loop>
                <source src={headerVideo} type="video/mp4"/>
                Your browser does not support HTML5 video.
			</Video>
            <Hero>
                <HeroContent justify="center">
                    <div>
                        <HeaderImage src={header} />
                        <p>Revolutionary new display platform providing
                            <br /> the ultimate in product presentation;
                            <br />envisioning the future of display marketing.
                        </p>
                    </div>
                </HeroContent>
                <HeroContent justify="center">
                    <img src={background} />
                </HeroContent>
            </Hero>
        </Header>

        <Body>

            <HeaderContainer justify="center">
                <ParagraphHeader ff="InterUIExtraBold" fs="2.5rem">Visual</ParagraphHeader>
                <Divider color='#000'></Divider>
                <ParagraphHeader ff="InterUIRegular" fs="2.5rem">Options</ParagraphHeader>
            </HeaderContainer>

            <Paragraph ta="center" fs="22px" margin="40px 0 15px 0">
                Each display can be configured into four options.
            </Paragraph>

            <PhotoGrid>
                <Photo>
                    <img src={photo5} />
                    <HeaderContainer justify="center" margin="25px 0px">
                        <ParagraphHeader ff="InterUIExtraBold" fs="1.25rem">1&nbsp;</ParagraphHeader>
                        <ParagraphHeader ff="InterUIRegular" fs="1.25rem">| Sided</ParagraphHeader>
                    </HeaderContainer>
                </Photo>
                <Photo>
                    <img src={photo6} />
                    <HeaderContainer justify="center" margin="25px 0px">
                        <ParagraphHeader ff="InterUIExtraBold" fs="1.25rem">2&nbsp;</ParagraphHeader>
                        <ParagraphHeader ff="InterUIRegular" fs="1.25rem">| Sided</ParagraphHeader>
                    </HeaderContainer>
                </Photo>
                <Photo>
                    <img src={photo7} />
                    <HeaderContainer justify="center" margin="25px 0px">
                        <ParagraphHeader ff="InterUIExtraBold" fs="1.25rem">4&nbsp;</ParagraphHeader>
                        <ParagraphHeader ff="InterUIRegular" fs="1.25rem">| Sided</ParagraphHeader>
                    </HeaderContainer>
                </Photo>
                <Photo>
                    <img src={photo8} />
                    <HeaderContainer justify="center" margin="25px 0px">
                        <ParagraphHeader ff="InterUIExtraBold" fs="1.25rem">LCD&nbsp;</ParagraphHeader>
                        <ParagraphHeader ff="InterUIRegular" fs="1.25rem">| Incorporated</ParagraphHeader>
                    </HeaderContainer>
                </Photo>
            </PhotoGrid>
        </Body>

        <Benefits>
            <HeaderContainer justify="center">
                <ParagraphHeader ff="InterUIExtraBold" fs="2.5rem">Benefits</ParagraphHeader>
                <Divider color='#000'></Divider>
                <ParagraphHeader ff="InterUIRegular" fs="2.5rem">Features</ParagraphHeader>
            </HeaderContainer>
            <Paragraph ta="center" margin="40px 100px" fs="24px">FlyVision is a 21st Century technology based company that
                offers unique and innovative.<br />
                display solutions designed to
                drive incremental sales at the point of purchase.
            </Paragraph>
            <Icons>
                <Box>
                    <Octicon icon={Gift} size="large" />
                    <p>First mover advantage for a new to market product</p>
                </Box>
                <Box>
                    <Octicon icon={Organization} size="large" />
                    <p>Opportunity to increase sales at point of purchase</p>
                </Box>
                <Box>
                    <Octicon icon={Eye} size="large" />
                    <p>Revolutionary new display platform providing the ultimate in product presentation</p>
                </Box>
                <Box>
                    <Octicon icon={Tag} size="large" />
                    <p>Reinforce premium position of your brand</p>
                </Box>
                <Box>
                    <Octicon icon={Settings} size="large" />
                    <p>Flexible options for display solutions using FlyVision technology</p>
                </Box>
                <Box>
                    <Octicon icon={Globe} size="large" />
                    <p>FlyVision currently operating in 6 markets</p>
                </Box>
            </Icons>
        </Benefits>

        <HeaderContainer justify="center" margin='-20px 0 40px 0'>
                <ParagraphHeader ff="InterUIExtraBold" fs="2.5rem">Our</ParagraphHeader>
                <Divider color='#000'></Divider>
                <ParagraphHeader ff="InterUIRegular" fs="2.5rem">Info</ParagraphHeader>
            </HeaderContainer>
        <HeaderContainer justify="center" margin="50px 0 140px 0" fDirection="column">
            <Paragraph ta="center" margin="40px 100px" fs="24px">
                <a href='mailto:don@flyvisionusa.com'>inquiries@flyvisionusa.com</ a>
                <br /><br /> 
                (361) 353-8283<br /><br />
                1415 SW 21st Avenue<br /> Fort Lauderdale,
                FL 33312 USA
            </Paragraph>
        </HeaderContainer>
        <Footer>
            <Portfolio>
                <img src={christian} />
                <img src={hublot} />
                <img src={samsung} />
                <img src={swarovski} />
                <img src={telenor} />
            </Portfolio>
            <Paragraph ta="center" padding="25px 250px" color="white" margin='0'>FlyVision is a 21st Century technology based company that
                offers unique and innovative display solutions designed to
                drive incremental sales at the point of purchase.</Paragraph>
        </Footer>

    </React.Fragment>
)
