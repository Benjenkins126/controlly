import React, { useEffect, useState } from 'react';
import ChangelogItem from './components/layout/Changelog/ChangelogItem';
import PageLoader from './components/layout/PageLoader';
import Modal from './components/ui/modal/Modal';
import Main from './router/Main';

function App() {

  const [pageLoaded, setPageLoaded] = useState(false);
  const [changelogModalOpen, setChangelogModalOpen] = useState(false);

  const closeChangelogModal = () => {
    setChangelogModalOpen(false);
  }

  const createRipple = (event: any) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if(ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  useEffect(() => {
    const buttons = document.getElementsByClassName("pulseBtn");
    for(const button of buttons) {
      button.addEventListener("click", createRipple);
    }

    setPageLoaded(true);
  }, [pageLoaded]);

  return (
    <>
      <PageLoader show={!pageLoaded} />
      <Main />

      <Modal show={changelogModalOpen} closeModal={closeChangelogModal} classes="!w-950 !px-0 !py-0 !h-changelog">
        <div className="grid grid-cols-7 gap-5 h-full">
          <div className="bg-backgroundColor col-span-2 rounded-tl-lg rounded-bl-lg py-4 px-4 h-full">
            <ChangelogItem id="v123-item" version="1.23" releaseDate="1w ago" active={true} />
            <ChangelogItem id="v122-item" version="1.22" releaseDate="2w ago" active={false} />
            <ChangelogItem id="v121-item" version="1.21" releaseDate="3w ago" active={false} />
            <ChangelogItem id="v120-item" version="1.20" releaseDate="4w ago" active={false} />
            <ChangelogItem id="v119-item" version="1.19" releaseDate="1m ago" active={false} />
          </div>
          <div className="col-span-5 h-full py-6">
            <h2 className="pl-2 font-sans text-xl font-bold">Release Highlights v1.23</h2>
            <h4 className="pl-2 font-sans text-black/50 text-base mb-4">22nd August 2022</h4>
            <div className="grid grid-cols-2 gap-5">
              <div className="pl-2 pr-4">
                <div className="border-b border-black/10 py-3">
                  <h5 className="text-black font-bold font-sans text-base">New Widgets</h5>
                  <p className="text-black/50 font-sans text-sm">We have expanded our default widget library to contain a larger range for smart home devices</p>
                </div>
                <div className="border-b border-black/10 py-3">
                  <h5 className="text-black/50 font-sans text-base">New Widgets</h5>
                  <p className="text-black/25 font-sans text-sm">We have expanded our default widget library to contain a larger range for smart home devices</p>
                </div>
                <div className="border-b border-black/10 py-3">
                  <h5 className="text-black/50 font-sans text-base">New Widgets</h5>
                  <p className="text-black/25 font-sans text-sm">We have expanded our default widget library to contain a larger range for smart home devices</p>
                </div>
                <div className="border-b border-black/10 py-3">
                  <h5 className="text-black/50 font-sans text-base">New Widgets</h5>
                  <p className="text-black/25 font-sans text-sm">We have expanded our default widget library to contain a larger range for smart home devices</p>
                </div>
              </div>
              <div className="pr-8">
                <img src="" alt="" className="rounded-lg bg-black/10 w-full h-48 border-0 outline-0" />
                <h5 className="font-sans font-bold text-base mt-5 mb-3">23 new default widgets</h5>
                <p className="font-sans text-sm text-black/50">We have included 23 new widgets for you to use within your home. This new library is available via the Controlly marketplace.</p>
                <p className="font-sans text-sm text-black/50 mt-4">We also have over 500+ widget designs by other developers ready to be installed on your home.</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default App;
