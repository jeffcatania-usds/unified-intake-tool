
const FakeHeader = () => (
  <header className="usa-header usa-header--extended" role="banner">
    <div style={{backgroundColor: '#222c67', padding: '10px', width: '100%'}}>
      <img src="/site/joefarhavenusds/unified-intake-tool/FDA_Logo_Icon_White.svg" style={{height:80, paddingTop: '10px', paddingLeft: '10px'}} />
      <ul style={{listStyleType: 'none', float: 'right', marginTop: '30px'}}>
        <li style={{display: 'inline-block'}}><a title="" id="btn-search" style={{borderColor: 'rgb(229,182,17)', borderRadius: '3px', borderStyle: 'solid', borderWidth: '1px', fontFamily: 'Helvetica, Arial', fontSize: '12px', fontWeight: '400', paddingBottom: '5px', paddingLeft: '10px', paddingTop: '5px', paddingRight: '10px', color: 'white', margin: '10px'}}>
          <span class="fa fa-search" aria-hidden="true">&nbsp;</span>
          <span>Search</span>
        </a></li>
        <li style={{display: 'inline-block'}}><a id="menu-btn" style={{borderColor: 'rgb(229,182,17)', borderRadius: '3px', borderStyle: 'solid', borderWidth: '1px', fontFamily: 'Helvetica, Arial', fontSize: '12px', fontWeight: '400', paddingBottom: '5px', paddingLeft: '10px', paddingTop: '5px', paddingRight: '10px', color: 'white', margin: '10px', textDecoration: 'none'}} href="#primary-nav" data-toggle="collapse" aria-expanded="true">
          <span class="fa fa-bars" aria-hidden="true">&nbsp;</span>
          <span>Menu</span>
        </a></li>
      </ul>
    </div>
  </header>
);

export default FakeHeader;