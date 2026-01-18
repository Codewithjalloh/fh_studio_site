'use client';

import Image from 'next/image';

const TechStackSection = () => {
  const technologies = [
    {
      name: 'PyTorch',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2HyWFnFdgl4I6rqXwhjFunzGJK78re10ewtyIRAG3icctlhyfXWGKsqpCnsUk3X5GYCOxIRJ9n6aPNO6NsN0htMiyUOHYBggRI8_kNRL8H5ias3lIVaqsQGf_VdX4e2P7oq8eOZikjwFD1MyQeoVLWeGPh_3fVq9R0wzWeaMvJ1hKPTCkt3htlpmgNV7xrC-3wyzX4rksFRABE--zsQqML8R7V1BxZ-tbwNJHLsblYNvOrmeP_-vKAfkWQDKfy7wQBbDLPy9Ogrk'
    },
    {
      name: 'TensorFlow',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHHqvQwwq1VebRlT4Fg6xV2GmUtO7BlTNe0lNe_Ah8JeSE9zsz40BZ6gdbh1YDBEczP-ANJQ18raqtPlv4ZnibLntOe7ozed669M9LUuzqVn9G9crrw3ZipAnAsCiLhnGzuCvgXmBi1ThG8LEZb6OwrWZcya72KRB5jS4LwhSegkiUztjNo6ER99_XbMA8P9P8nwHQ6d224hou0eBLXy79SunfrEwm3VHLWgCn5j-knBKkGCq2ymWdB7FLifFoixtKSlNXzNrj0hk'
    },
    {
      name: 'OpenAI',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxyAmU8CQntrWCyd56uZKKzuM49JsYzcfLDmqlgNf--MiPiaqN6-SDPDNZ8UJLR-iLtru8t4XtIVT3Q5U0X02gAWHRMI1aQJApfFbotjooPscTgoGUHQolgT9HaK8c-FkDpmRhr6D7zbUNgRCs_IJcYmRuF_cHN4W8bN9WhX08JJSwDG7ULeIuH3Dkw7-KjqUn_HHOMRApjiZW-gTGoZi0QW6u0lMDc9AkqAHY4TjJFlEmwR3zNaKoQQ4oO_KbPzHyHU1VpQ4Vleo'
    },
    {
      name: 'AWS Cloud',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0fgv4qNhJQ9bJz9z4w74K3n1qSi_YXYlnTSIIjS0ULsYksLUksafQc9n9zTvACFX2GFlLK8M2EK_qge6CqODMXdNg57u0WO0MTRbrYZ2dG_tI6odJO0tht4_2yNyHZflP5aQkq7DPp4Inm8IudQ8H17N_EGlw57ND1Rnt3j2c48CRW46ZClK4Eox0ngqGQET2mMntuWT3H-YT4iOoiQBNZk68jQ5AOCjwaUSY7kLOiwjxN2-NkzG4dILtMG6tZZl84r0grjlipxk'
    },
    {
      name: 'Hugging Face',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvfYPJIYzxbuDVCqL_9tENfxw-HxgChb5A_AoGnn1_sfJFMV9-Bh8uruHIFs2Oj-waNyUiBaCONqF4_OWc86V-dc-M7jklBPJ2Tcm_q7H7EBAdHr8IgBYwtxZdlGT6Eo2aw8V1G9hq3vouegixgDLUNOWLGqiETy3_QOwdLQPGU25uJtuyHQeNGQHrnaRqqI5XAkT4hyOzNUiWgri1wkmny6rQysoY8npwrDSblv-JGlUIJwuhGLK6dkaeXSPSrBypF9EwL97QlyI'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-slate-900 text-2xl font-bold mb-2">Our Arsenal</h2>
        <p className="text-slate-500">Industry-leading tools and frameworks we leverage every day.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <div className="h-8 w-24 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image
                alt={tech.name}
                src={tech.image}
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
