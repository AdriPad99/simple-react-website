export default function TabButton({children, handleButtonClick, isSelected}) {

    return (
        <li>
            <button className={isSelected ? 'active' : null} onClick={handleButtonClick}>
                { children }
            </button>
        </li>
    );
}