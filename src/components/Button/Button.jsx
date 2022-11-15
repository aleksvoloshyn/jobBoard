const Button = ({ title, margB, displayMob, displayDesk, marginx }) => {
  return (
    <button
      className={`text-[white]  mobile:mx-${marginx} mb-${margB} text-xs bg-applbutton h-button   w-32 mobile:${displayMob} desktop:${displayDesk} flex justify-center items-center rounded-lg`}
    >
      {title}
    </button>
  )
}

export default Button
