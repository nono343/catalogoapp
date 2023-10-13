import React from "react";
import PropTypes from "prop-types";

class ScrollToTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.toggleVisibility);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.toggleVisibility);
    }

    toggleVisibility = () => {
        if (window.pageYOffset > 20) {
            this.setState({ isVisible: true });
        } else {
            this.setState({ isVisible: false });
        }
    };

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    goBack = () => {
        window.history.back(); // Esta función va hacia atrás en la historia del navegador
    };

    render() {
        const { location, children } = this.props;
        const { isVisible } = this.state;

        const buttonStyle = {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
        };

        return (
            <>
                {children}
                {isVisible && (
                    <div className="">
                        <button
                            type="button"
                            className="inline-block p-3 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                            id="btn-back-to-top"
                            style={buttonStyle}
                            onClick={this.scrollToTop}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="inline-block p-3 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                            id="btn-go-back"
                            style={{
                                ...buttonStyle,
                                bottom: "80px", // Ajusta la posición vertical para evitar superposición con el botón de ir arriba
                            }}
                            onClick={this.goBack}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                            </svg>
                        </button>
                    </div>
                )}
            </>
        );
    }
}

ScrollToTop.propTypes = {
    location: PropTypes.object,
    children: PropTypes.node
};

export default ScrollToTop;
