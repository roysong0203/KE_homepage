document.addEventListener("DOMContentLoaded", function() {
    // .content의 모든 직접 자식 요소를 선택
    const animatedItems = document.querySelectorAll('.content > *');

    const observerOptions = {
        threshold: 0.1  // 10% 이상 보이면 트리거
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if(entry.isIntersecting) {
            // 뷰포트에 들어오면 .animate 클래스를 추가하여 애니메이션 실행
            entry.target.classList.add('animate');
            // 한 번 애니메이션이 실행되면 관찰 해제
            observer.unobserve(entry.target);
        }
        });
    }, observerOptions);

    animatedItems.forEach(item => {
        observer.observe(item);
    });
});