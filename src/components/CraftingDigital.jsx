export default function CraftingDigital() {
    return (
        <div className="mb-20"
            style={{
                backgroundImage: "url('/images/bgCraft.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="px-96 py-32">
                <div className="text-center">
                    <h1 className="text-[87px] font-semibold text-end">
                        <span className="text-end">
                            <span className="text-end">Crafting digital</span> <br />
                            <span
                                className="text-gradient-anim-craft text-end"
                                style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    translate: 'none',
                                    rotate: 'none',
                                    scale: 'none',
                                    opacity: '1',
                                    visibility: 'inherit',
                                    transform: 'translate(0px, 0px)',
                                }}
                            >
                                experiences
                            </span>
                            <br />
                        </span>
                    </h1>
                    <h1 className="text-[87px] font-semibold text-start ps-36">since 2004</h1>
                </div>
            </div>
        </div>
    );
}
