import React from 'react'

export default function Rating(props) {
    const rating = () => {
        const num = props.children;
        switch (true){
            case num >= 0 && num <= 1:
                return'★☆☆☆☆';
            case num >= 1 && num <= 2:
                return '★★☆☆☆';
            case num >= 2 && num <= 3:
                return '★★★☆☆';
            case num >= 3 && num <= 4:
                return '★★★★☆';
            case num >= 4 && num <= 5:
                return '★★★★★';
        }
    }


    return (
        <div>
            {rating()}
        </div>
    )
}


