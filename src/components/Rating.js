import React from 'react'

export default function Rating(props) {
    const rating = () => {
        const num = props.children;
        switch (true){
            case num >= 0 && num < 0.5:
                return'☆☆☆☆☆';
            case num >= 0.5 && num < 1.5:
                return '★☆☆☆☆';
            case num >= 1.5 && num < 2.5:
                return '★★☆☆☆';
            case num >= 2.5 && num < 3.5:
                return '★★★☆☆';
            case num >= 3.5 && num < 4.5:
                return '★★★★☆';
            case num >= 4.5 && num <= 5:
                return '★★★★★';
        }
    }

    return (
        <div>
            {rating()}
        </div>
    )
}


